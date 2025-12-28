import { memo, useState } from 'react';
import "./style.scss";
import { Link, useNavigate } from 'react-router-dom';
import { ROUTERS } from 'utils/router';
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


const Footer = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');

  const navigate = useNavigate();

  const handleSubscribe = (e) => {
    e.preventDefault();
    const email = (newsletterEmail || '').trim();
    if (!email) {
      alert('Vui lòng nhập email');
      return;
    }

    // Navigate to internal login/register route and prefill email
    const path = `/${ROUTERS.USER.LOGIN}`;
    const query = `?email=${encodeURIComponent(email)}&register=1`;
    navigate(`${path}${query}`);
  };

  return (
    <footer className="footer">
      <div className='container'>
        <div className='row'>
          <div className='col-lg-3 col-md-6 col-sm-6 col-xs-12'>
            <div className='footer__about'>
              <h1 className='footer__about__logo'>DT SHOP</h1>
              <ul>
                <li>Địa chỉ: 97 Man Thiện</li>
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
                  <a href="https://www.facebook.com/Tinhthu219" target="_blank" rel="noopener noreferrer">Liên hệ</a>
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
              <form onSubmit={handleSubscribe}>
                <div className='input__group'>
                  <input type='email' placeholder='Nhập email của bạn' value={newsletterEmail} onChange={(e) => setNewsletterEmail(e.target.value)} />
                  <button type='submit' className='button-submit'>Đăng ký</button>
                </div>
                <div className='footer__widget_social'>
                  <a href="https://www.facebook.com/Tinhthu219" target="_blank" rel="noopener noreferrer"><FaFacebookSquare /></a>
                  <a href="https://www.facebook.com/Tinhthu219" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                  <a href="https://www.facebook.com/Tinhthu219" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
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