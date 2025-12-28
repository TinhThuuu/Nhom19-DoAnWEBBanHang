import { memo } from 'react';
import Breadcrumb from '../theme/breadcrumb';
import "./style.scss"
import x921 from 'assets/users/images/Features/x9-2-1.jpg';
import x922 from 'assets/users/images/Features/x9-2-2.jpg';
import x923 from 'assets/users/images/Features/x9-2-3.jpg';
import { AiOutlineCopy, AiOutlineEye, AiOutlineFacebook, AiOutlineLinkedin } from 'react-icons/ai';
import { formater } from 'utils/formater';
import { ProductsCard, Quantity} from 'component';
import { useProductsUS } from 'api/productsPage';
import { useParams } from "react-router-dom";
import { useProductDetailUS } from "api/productDetailPage";



const ProductDetailPage = () => {

  const { id } = useParams();
  const { data: product, isLoading } = useProductDetailUS(id);

  // build imgs after product is available; use product.img when present, otherwise fallback to x923
  const imgs = [x921, x922, product?.img || x923];

  // fetch products to show similar products
  const { data: productsData } = useProductsUS();
  const apiProducts = productsData?.products || productsData?.data || productsData || [];
  const allProducts = apiProducts.map((p, idx) => ({
    id: p.id || p._id || p.productId || idx,
    img: p.img || p.image || (p.images && p.images[0]) || x921,
    name: p.name || p.title || p.productName || "",
    price: p.price || p.sellPrice || p.unitPrice || 0,
    categoryId: p.category_id || p.categoryId || (p.category && (p.category.id || p.category._id)) || "",
  }));

  // choose similar products: same category (if available) excluding current product, fallback to others
  const similarProducts = (() => {
    if (!product) return [];
    const prodCategory = product.category_id || product.categoryId || (product.category && (product.category.id || product.category._id)) || product.category || "";
    const filtered = allProducts.filter((p) => String(p.id) !== String(product.id));
    const byCategory = prodCategory ? filtered.filter((p) => String(p.categoryId) === String(prodCategory)) : [];
    const list = (byCategory.length ? byCategory : filtered).slice(0, 8);
    return list;
  })();

  return (
    <>
      <Breadcrumb name="Chi tiết sản phẩm" />
      {
        !isLoading && (
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-xl-12 col-md-12 col-sm-12 col-xs-12 product__detail__pic">
                <img src={product.img} alt='prod-pic'/>
                <div className='main'>
                  {
                    imgs.map((item,key)=>(
                      <img src={item} alt='prod-pic' key={key}/>
                    ))
                  }
                </div>
              </div>
              <div className="col-lg-6 col-xl-12 col-md-12 col-sm-12 col-xs-12 product__detail__text">
                <h2>{product.name}</h2>
                <div className='seen-icon'>
                  <AiOutlineEye />
                  {`187 ( Lượt xem )`}
                </div>
                <h3>{formater(product.price)}</h3>
                <p>
                  {product.sort_description}
                </p>
                <Quantity product={product} />

                <ul>
                  <li>
                    <b>Tình trạng: </b> <span>Còn hàng</span>
                  </li>
                  <li>
                    <b>Số lượng: </b> <span>{product.inventory}</span>
                  </li>
                  <li>
                    <b>Chia sẻ: </b>{' '}
                    <span>
                      <AiOutlineLinkedin />
                      <AiOutlineFacebook />
                      <AiOutlineCopy />

                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className='product__detail__tab'>
              <h4>Thông tin chi tiết</h4>
              <div dangerouslySetInnerHTML={{__html: product.description}}>
                
              </div>
            </div>
            <div className='section-title'>
              <h2>Sản phẩm tương tự</h2>
            </div>
            <div className='row'>
              {similarProducts.map((item, key) => (
                <div key={key} className='col-lg-3 col-md-4 col-sm-6 col-xs-12'>
                  <ProductsCard product={item} />
                </div>
              ))}
            </div>
      </div>

        )
      }
      
    </>
  );
};



export default memo(ProductDetailPage);