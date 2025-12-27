import { memo } from 'react';
import Breadcrumb from '../theme/breadcrumb';
import "./style.scss"
import { categoriesHardCode } from '../theme/header';
import { ROUTERS } from 'utils/router';
import { Link } from 'react-router-dom';
import { ProductsCard } from 'component';
import feat1 from 'assets/users/images/Features/iphone_17_256.jpg';
import feat2 from 'assets/users/images/Features/iphone_air256.jpg';
import feat3 from 'assets/users/images/Features/iphone-14_128.jpg';
import feat4 from 'assets/users/images/Features/iphone-15-plus_1__1.jpg';
import feat5 from 'assets/users/images/Features/samsung-galaxy-s24.jpg';
import feat6 from 'assets/users/images/Features/samsung-galaxy-z-fold-7-xanh256.jpg';
import feat7 from 'assets/users/images/Features/SSG_S25_U12G_256G.jpg';



const ProductsPage = () => {
  const sorts = [
    "Giá thấp đến cao",
    "Giá cao đến thấp",
    "Mới đến cũ",
    "Cũ đến mới",
    "Bán chạy nhất",
    "Đang giảm giá",
  ];

  const products =[
    {
      id: 1,
      img: feat1,
      name: "iPhone 17 256GB",
      price: 32990000,
    },
    {
      id: 2,
      img: feat2,
      name: "iPhone Air 256GB",
      price: 28990000,
    },
    {
      id: 3,
      img: feat3,
      name: "iPhone 14 128GB",
      price: 16990000,
    },
    {
      id: 4,
      img: feat4,
      name: "iPhone 15 Plus 128GB",
      price: 22990000,
    },
    {
      id: 5,
      img: feat5,
      name: "Samsung Galaxy S24",
      price: 20990000,
    },
    {
      id: 6,
      img: feat6,
      name: "Samsung Galaxy Z Fold 7 256GB",
      price: 44990000,
    },
    {
      id: 7,
      img: feat7,
      name: "Samsung Galaxy S25 Ultra 12GB/256GB",
      price: 33990000,
    },

  ]

  return (
    <>
      <Breadcrumb name="Danh sách sản phẩm" />
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12">
            <div className="sidebar">
              <div className="sidebar__item">
                <h2>Tìm kiếm</h2>
                <input type="text" />
              </div>
              <div className="sidebar__item">
                <h2>Mức giá</h2>
                <div className='price-range-wrap'>
                  <div>
                    <p>Từ: </p>
                    <input type="number" min={0} />
                  </div>
                  <div>
                    <p>Đến: </p>
                    <input type="number" min={0} />
                  </div>
                </div>
            </div>
            <div className="sidebar__item">
                <h2>Sắp xếp</h2>
                <div className='tags'>
                  {sorts.map((item,key)=>(
                    <div className={`tag ${key === 0 ? 'active' : ''}`} key={key}>
                      {item}
                    </div>
                ))}
                </div>
              </div>
            <div className="sidebar__item">
                <h2>Thể loại khác</h2>
                <ul>
                  {categoriesHardCode.map((name,key)=>(
                   <li key ={key}>
                    <Link to={ROUTERS.USER.PRODUCTS}>{name}</Link>
                  </li> 
                  ))}   
                </ul> 


              </div>
              </div>
          </div>
          <div className="col-lg-9 col-md-12 col-sm-12 col-xs-12">
            <div className='row'>
              {products.map((item,key)=>(
                <div className='col-lg-4 col-md-4 col-sm-6 col-xs-12' key={key}>
                  <ProductsCard product={item} />
                </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};



export default memo(ProductsPage);