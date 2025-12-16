import { memo, useState } from 'react';
import './style.scss';
import { FaSquareFacebook } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { formater } from 'utils/formater';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { ROUTERS } from 'utils/router';
import { AiOutlineMenu } from "react-icons/ai";
import { HiOutlinePhone } from "react-icons/hi";

const Header = () => {
  const [isShowCategories, setShowCategories] = useState(true);

  const [menus] = useState([
    {
      name: 'Trang chủ',
      path: ROUTERS.USER.HOME,
    },
    {
      name: 'Cửa hàng',
      path: ROUTERS.USER.PRODUCTS,
    },
    {
      name: 'San pham',
      path: '',
      isShowSubMenu: false,
      child: [
        {
          name: 'San pham 1',
          path: '',
        },
        {
          name: 'San pham 2',
          path: '',
        },
        {
          name: 'San pham 3',
          path: '',
        },
        {
          name: 'San pham 4',
          path: '',
        },
      ]

    },
    {
      name: 'Bai viet',
      path: '',
    },
    {
      name: 'Lien he',
      path: '',
    },
  ])

  return (
    <>
      <div className='header__top'>
        <div className='container'>
          <div className='row'>
            <div className='col-6 header__top_left'>
              <ul>
                <li><MdOutlineEmail />tinhlv219@gmail.com</li>
                <li>Liên hệ: ngay 24/7</li>
              </ul>






            </div>
            <div className='col-6 header__top_right'>
              <ul>
                <li>
                  <FaSquareFacebook />
                </li>
                <li>
                  <IoLogoInstagram />
                </li>
                <li>
                  <span><FaUserCircle />Đăng nhập</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col-xl-3'>
            <div className='header__logo'>
              <h1>DT SHOP</h1>
            </div>
          </div>
          <div className='col-xl-6'>
            <nav className='header__menu'>
              <ul>
                {
                  menus?.map((menus, menuKey) => (
                    <li key={menuKey} className={menuKey === 0 ? 'active' : ''}>
                      <Link to={menus?.path}>{menus?.name}</Link>
                      {
                        menus.child && (
                          <ul className='header__menu_dropdown'>
                            {
                              menus.child.map((childItem, childKey) => (
                                <li key={`${menuKey}-${childKey}`}>
                                  <Link to ={childItem.path}>{childItem.name}</Link>
                                </li>
                            ))}
                          </ul>
                        )}
                    </li>
                  ))}
              </ul>
            </nav>
          </div>
          <div className='col-xl-3'>
            <div className='header__cart'>
              <div className='header__cart_price'>
                <span>{formater(12345670)}</span>
              </div>
              <ul>
                <li>
                  <Link to="#">
                    <AiOutlineShoppingCart /><span>5</span>
                  </Link>
                </li>
              </ul>
            </div>


          </div>
        </div>
      </div>
      <div className='container'>
        <div className='row hero__categories_container'>
          <div className='col-xl-3 hero__categories'>
            <div className='hero__categories_all' onClick={() => setShowCategories(!isShowCategories)}>
              <AiOutlineMenu />
              Danh sách sản phẩm
            </div>
            {isShowCategories && (
              <ul>
              <li>
                <Link to="#">Sản phẩm 1</Link>
              </li>
              <li>
                <Link to="#">Sản phẩm 2</Link>
              </li>
              <li>
                <Link to="#">Sản phẩm 3</Link>
              </li>
              <li>
                <Link to="#">Sản phẩm 4</Link>
              </li>
              <li>
                <Link to="#">Sản phẩm 5</Link>
              </li>
              <li>
                <Link to="#">Sản phẩm 6</Link>
              </li>
            </ul>
            )
            }
          </div>
          <div className='col-xl-9 hero__search_container'>
            <div className='hero__search'>
              <div className='hero__search_form'>
                <form>
                  <input type='text' placeholder='Bạn cần tìm gì?' />
                  <button type='submit'>Tìm kiếm</button>
                </form>
              </div>
              <div className='hero__search_phone'>
                <div className='hero__search_phone_icon'>
                  <HiOutlinePhone />
               </div>
               <div className='hero__search_phone_text'>
                  <p>0976.580.867</p>
                  <span>Hỗ trợ 24/7</span>
               </div>
              </div>
            </div>
            <div className='hero__item'>
              <div className='hero__text'>
                <span>Khuyến mãi hot!!!</span>
                <h2>
                  Săn Táo <br />
                  Giá Sốc
                </h2>
                <p>Bảo hành 1 đổi 1 trong 12 tháng</p>
                <Link to='#' className='primary-btn'>Mua ngay</Link>

              </div>

            </div>
          </div>
        </div>
      </div>
    </>

  );
};

export default memo(Header);