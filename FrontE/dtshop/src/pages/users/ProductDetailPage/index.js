import { memo } from 'react';
import Breadcrumb from '../theme/breadcrumb';
import "./style.scss"
import x921 from 'assets/users/images/Features/x9-2-1.jpg';
import x922 from 'assets/users/images/Features/x9-2-2.jpg';
import x923 from 'assets/users/images/Features/x9-2-3.jpg';
import { AiOutlineCopy, AiOutlineEye, AiOutlineFacebook, AiOutlineLinkedin } from 'react-icons/ai';
import { formater } from 'utils/formater';
import { ProductsCard, Quantity} from 'component';
import { featProducts } from 'utils/common'

const ProductDetailPage = () => {

  const imgs=[x921,x922,x923]

  return (
    <>
      <Breadcrumb name="Chi tiết sản phẩm" />
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-xl-12 col-md-12 col-sm-12 col-xs-12 product__detail__pic">
            <img src={x921} alt='prod-pic'/>
            <div className='main'>
              {
                imgs.map((item,key)=>(
                  <img src={item} alt='prod-pic' key={key}/>
                ))
              }
            </div>
          </div>
          <div className="col-lg-6 col-xl-12 col-md-12 col-sm-12 col-xs-12 product__detail__text">
            <h2>OPPO X9</h2>
            <div className='seen-icon'>
              <AiOutlineEye />
              {`187 ( Lượt xem )`}
            </div>
            <h3>{formater(22990000)}</h3>
            <p>
              Trải nghiệm đẳng cấp cùng Oppo X9 phiên bản 12GB/256GB. Máy được trang bị màn hình AMOLED 120Hz sống động, vi xử lý thế hệ mới cân mọi tác vụ nặng. Bộ nhớ trong 256GB lưu trữ thả ga cùng công nghệ sạc nhanh SuperVOOC độc quyền giúp bạn luôn sẵn sàng cho ngày dài năng động.

            </p>
            <Quantity />

            <ul>
              <li>
                <b>Tình trạng: </b> <span>Còn hàng</span>
              </li>
              <li>
                <b>Số lượng: </b> <span>99</span>
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
          <div>
            <ul>
              <li>van van may may</li>
              <li>van van may may</li>
              <li>van van may may</li>
              <li>van van may may</li>
            </ul>
          </div>
        </div>
        <div className='section-title'>
          <h2>Sản phẩm tương tự</h2>
        </div>
        <div className='row'>
          {
            featProducts.all.products.map((item, key)=>(
              <div key={key} className='col-lg-3 col-md-4 col-sm-6 col-xs-12'>
                <ProductsCard img={item.img} name={item.name} price={item.price} />
              </div>
            ))}
        </div>
      </div>
    </>
  );
};



export default memo(ProductDetailPage);