import { memo, useState, useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import Breadcrumb from '../theme/breadcrumb';
import "./style.scss"
import { useGetCategoriesUS } from 'api/homePage';
import { ROUTERS } from 'utils/router';
import { Link } from 'react-router-dom';
import { ProductsCard } from 'component';
import { useProductsUS } from 'api/productsPage';
import { setSearchQuery } from '../../../redux/commonSlide';
import feat1 from 'assets/users/images/Features/iphone_17_256.jpg';

const ProductsPage = () => {
  const sorts = [
    "Giá thấp đến cao",
    "Giá cao đến thấp",
    "Mới đến cũ",
    "Cũ đến mới",
    "Bán chạy nhất",
    "Đang giảm giá",
  ];

  // Use API hook to fetch products list
  const { data, isLoading, isError } = useProductsUS();

  const dispatch = useDispatch();
  const searchQuery = useSelector((s) => s.commonSlide.searchQuery || "");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  useEffect(() => {
    const t = setTimeout(() => setDebouncedQuery(searchQuery), 300);
    return () => clearTimeout(t);
  }, [searchQuery]);

  // categories from API
  const { data: categoriesData } = useGetCategoriesUS();
  const categories = categoriesData?.categories || categoriesData?.data || categoriesData || [];

  const [selectedSort, setSelectedSort] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const location = useLocation();

  // pagination
  const [currentPage, setCurrentPage] = useState(1);
  const PAGE_SIZE = 12;

  // Normalize backend product structure to what `ProductsCard` expects
  // support responses like: [], { products: [] }, { data: [] }
  const apiProducts = data?.products || data?.data || data || [];
  const products = apiProducts.map((p, idx) => ({
    id: p.id || p._id || p.productId || idx,
    img: p.img || p.image || (p.images && p.images[0]) || feat1,
    name: p.name || p.title || p.productName || "",
    price: p.price || p.sellPrice || p.unitPrice || 0,
    categoryId: p.category_id || p.categoryId || p.category || (p.category && (p.category.id || p.category._id)) || "",
  }));

  // normalize string: lowercase, remove diacritics
  const normalize = (s = "") => s.toString().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

  // simple Levenshtein distance
  const levenshtein = (a = "", b = "") => {
    const al = a.length;
    const bl = b.length;
    if (!al) return bl;
    if (!bl) return al;
    const dp = Array.from({ length: al + 1 }, () => Array(bl + 1).fill(0));
    for (let i = 0; i <= al; i++) dp[i][0] = i;
    for (let j = 0; j <= bl; j++) dp[0][j] = j;
    for (let i = 1; i <= al; i++) {
      for (let j = 1; j <= bl; j++) {
        const cost = a[i - 1] === b[j - 1] ? 0 : 1;
        dp[i][j] = Math.min(dp[i - 1][j] + 1, dp[i][j - 1] + 1, dp[i - 1][j - 1] + cost);
      }
    }
    return dp[al][bl];
  };

  const isMatch = (product, q) => {
    if (!q) return true;
    const qn = normalize(q);
    const name = normalize(product.name || "");
    if (!name) return false;
    if (name.includes(qn)) return true;
    // token match
    if (name.split(/\s+/).some((t) => t.includes(qn))) return true;
    // fuzzy by levenshtein threshold
    const maxDist = Math.max(1, Math.floor(qn.length * 0.35));
    return levenshtein(name, qn) <= maxDist;
  };

  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      if (!isMatch(p, debouncedQuery)) return false;
      if (selectedCategory) {
        const cid = String(p.categoryId || "");
        if (cid !== String(selectedCategory)) return false;
      }
      const price = Number(p.price || 0);
      if (minPrice !== "" && !Number.isNaN(Number(minPrice))) {
        if (price < Number(minPrice)) return false;
      }
      if (maxPrice !== "" && !Number.isNaN(Number(maxPrice))) {
        if (price > Number(maxPrice)) return false;
      }
      return true;
    });
  }, [products, debouncedQuery, selectedCategory, minPrice, maxPrice]);

  const sortProducts = (list, sortKey) => {
    const copy = [...list];
    if (!sortKey) return copy;
    switch (sortKey) {
      case "Giá thấp đến cao":
        return copy.sort((a, b) => (a.price || 0) - (b.price || 0));
      case "Giá cao đến thấp":
        return copy.sort((a, b) => (b.price || 0) - (a.price || 0));
      case "Mới đến cũ":
        return copy.sort((a, b) => {
          const ta = new Date(a.createdAt || a.created_at || 0).getTime() || (a.id || 0);
          const tb = new Date(b.createdAt || b.created_at || 0).getTime() || (b.id || 0);
          return tb - ta;
        });
      case "Cũ đến mới":
        return copy.sort((a, b) => {
          const ta = new Date(a.createdAt || a.created_at || 0).getTime() || (a.id || 0);
          const tb = new Date(b.createdAt || b.created_at || 0).getTime() || (b.id || 0);
          return ta - tb;
        });
      case "Bán chạy nhất":
        return copy.sort((a, b) => (b.sold || b.sales || b.soldCount || 0) - (a.sold || a.sales || a.soldCount || 0));
      case "Đang giảm giá":
        return copy.sort((a, b) => {
          const da = (a.originalPrice || a.listPrice || 0) - (a.price || 0);
          const db = (b.originalPrice || b.listPrice || 0) - (b.price || 0);
          return db - da;
        });
      default:
        return copy;
    }
  };

  const finalProducts = useMemo(() => sortProducts(filteredProducts, selectedSort), [filteredProducts, selectedSort]);

  // initialize selectedCategory from query param
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const categoryParam = params.get('category');
    if (categoryParam) setSelectedCategory(categoryParam);
  }, [location.search]);

  // pagination compute
  const totalItems = finalProducts.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / PAGE_SIZE));
  useEffect(() => { if (currentPage > totalPages) setCurrentPage(1); }, [totalPages]);
  const pagedProducts = finalProducts.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

  return (
    <>
      <Breadcrumb name="Danh sách sản phẩm" />
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12">
            <div className="sidebar">
              <div className="sidebar__item">
                <h2>Tìm kiếm</h2>
                <input
                  type="text"
                  placeholder="Tìm theo tên..."
                  value={searchQuery}
                  onChange={(e) => dispatch(setSearchQuery(e.target.value))}
                />
              </div>
              <div className="sidebar__item">
                <h2>Mức giá</h2>
                <div className='price-range-wrap'>
                  <div>
                    <p>Từ: </p>
                    <input type="number" min={0} value={minPrice} onChange={(e) => setMinPrice(e.target.value)} />
                  </div>
                  <div>
                    <p>Đến: </p>
                    <input type="number" min={0} value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} />
                  </div>
                </div>
                {/*<div style={{marginTop:8}}>
                  < button className='primary-btn' onClick={() => { /* no-op: inputs control filtering live }}>Áp dụng</>
                  <button style={{marginLeft:8}} onClick={() => { setMinPrice(''); setMaxPrice(''); setSelectedCategory(''); setSelectedSort(''); dispatch(setSearchQuery('')); }}>Đặt lại</button>
                </div>*/}
              </div>
              <div className="sidebar__item">
                <h2>Sắp xếp</h2>
                <div className='tags'>
                  {sorts.map((item,key)=>(
                    <div className={`tag ${selectedSort === item ? 'active' : ''}`} key={key} onClick={() => setSelectedSort(item)}>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="sidebar__item">
                <h2>Thể loại khác</h2>
                <ul>
                  <li key={'all'}>
                    <a onClick={() => setSelectedCategory("")}>Tất cả</a>
                  </li>
                  {categories.map((cat)=>(
                    <li key={cat.id || cat._id || cat.name} className={String(selectedCategory) === String(cat.id || cat._id || cat.name) ? 'active' : ''}>
                      <a
                        href="#"
                        onClick={(e) => { e.preventDefault(); setSelectedCategory(cat.id || cat._id || cat.name); window.scrollTo(0,0); }}
                      >
                        {cat.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-9 col-md-12 col-sm-12 col-xs-12">
            <div className='row'>
              {isLoading && <div>Đang tải sản phẩm...</div>}
              {isError && <div>Lỗi khi tải sản phẩm.</div>}
              {!isLoading && !isError && pagedProducts.map((item,key)=>(
                <div className='col-lg-4 col-md-4 col-sm-6 col-xs-12' key={key}>
                  <ProductsCard product={item} />
                </div>
              ))}
              {/* Pagination controls */}
              {!isLoading && !isError && totalPages > 1 && (
                <div className="pagination-wrapper" style={{width:'100%', display:'flex', justifyContent:'center', marginTop:20}}>
                  <button disabled={currentPage===1} onClick={() => setCurrentPage((p) => Math.max(1, p-1))}>Prev</button>
                  {Array.from({length: totalPages}).map((_, i) => (
                    <button key={i} onClick={() => setCurrentPage(i+1)} style={{fontWeight: currentPage===i+1 ? 'bold' : 'normal', margin:'0 6px'}}>{i+1}</button>
                  ))}
                  <button disabled={currentPage===totalPages} onClick={() => setCurrentPage((p) => Math.min(totalPages, p+1))}>Next</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(ProductsPage);