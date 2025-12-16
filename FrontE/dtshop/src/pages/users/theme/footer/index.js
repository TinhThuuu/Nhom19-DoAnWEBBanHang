import { memo } from 'react';
import "./style.scss";
import { Link } from 'react-router-dom';
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="footer">
      <div className='container'>
        <div className='row'>
          <div className='col-lg-3 col-md-6 col-sm-6 col-xs-12'>
            <div className='footer__about'>
              <h1 className='footer__about__logo'>DT SHOP</h1>
              <ul>
                <li>Địa chỉ: 26A,ấp 1,xã An Hòa,tỉnh Đồng Tháp</li>
                <li>Phone:0976580867</li>
                <li>Email: tinhlv219@gmail.com</li>
              </ul>
            </div>
          </div>
          <div className='col-lg-6 col-md-6 col-sm-6 col-xs-12'>
            <div className='footer__widget'>
              <h6>Cửa hàng</h6>
              <ul>
                <li>
                  <Link to=''>Liên hệ</Link>
                </li>
                <li>
                  <Link to=''>Thông tin về chúng tôi</Link>
                </li>
                <li>
                  <Link to=''>Sản phẩm kinh doanh</Link>
                </li>
              </ul>
              <ul>
                <li>
                  <Link to=''>Thông tin tài khoản</Link>
                </li>
                <li>
                  <Link to=''>Giỏ hàng</Link>
                </li>
                <li>
                  <Link to=''>Danh sách ưa thích</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className='col-lg-3 col-md-12 col-sm-12 col-xs-12'>
            <div className='footer__widget'>
              <h6>Khuyến mãi và ưu đãi</h6>
              <p>Đăng ký nhận thông tin tại đây:</p>
              <form action='#'>
                <div className='input__group'>
                  <input type='text' placeholder='Nhập email của bạn' />
                  <button type='submit' class='button-submit'>Đăng ký</button>
                </div>
                <div className='footer__widget_social'>
                  <div><FaFacebookSquare /></div>
                  <div><FaInstagram /></div>
                  <div><FaLinkedin /></div> 
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>


    </footer>
  );
};

export default memo(Footer);