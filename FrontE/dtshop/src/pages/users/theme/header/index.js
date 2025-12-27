import { memo, useState, useEffect } from 'react';
import { ReactSession } from "react-client-session";
import './style.scss';
import { FaSquareFacebook } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { formater } from 'utils/formater';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link, useLocation, useNavigate} from 'react-router-dom';
import { ROUTERS } from 'utils/router';
import { AiOutlineMenu } from "react-icons/ai";
import { HiOutlinePhone } from "react-icons/hi";
import { AiOutlineDownCircle } from "react-icons/ai";
import { AiOutlineUpCircle } from "react-icons/ai";
import { useGetCategoriesUS } from "api/homePage";
import { useDispatch, useSelector } from "react-redux";
import { setSearchQuery } from "../../../../redux/commonSlide";
import { SESSION_KEYS } from "utils/constant";
import { setCart } from "../../../../redux/commonSlide";


export const categoriesHardCode = [
    "Sản phẩm 1",
    "Sản phẩm 2",
    "Sản phẩm 3",
    "Sản phẩm 4",
    "Sản phẩm 5",
    "Sản phẩm 6"
  ];


const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [isShowHumberger, setShowHumberger] = useState(false);
  const [isHome, setIsHome] = useState(location.pathname.length <= 1);
  const [isShowCategories, setShowCategories] = useState(isHome);
  const { cart: cartRedux } = useSelector((state) => state.commonSlide);
  const searchQuery = useSelector((state) => state.commonSlide.searchQuery || '');
  const [menus, setMenus] = useState([
    {
      name: 'Trang chủ',
      path: ROUTERS.USER.HOME,
    },
    {
      name: 'Cửa hàng',
      path: ROUTERS.USER.PRODUCTS,
    },
    {
      name: 'Sản phẩm',
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
      name: 'Bài viết',
      path: '',
    },
    {
      name: 'Liên hệ',
      path: '',
    },
  
  
  ]);
  

  useEffect(() => {
    const isHome = location.pathname.length <= 1;
    setIsHome(isHome);
    setShowCategories(isHome);
  }, [location]);

  const { data: categories } = useGetCategoriesUS();

  const userSession = ReactSession.get(SESSION_KEYS.USER);

  useEffect(() => {
    const cart = ReactSession.get(SESSION_KEYS.CART);

    if (cart) {
      dispatch(setCart(cart));
    }
  }, [dispatch]);

  return (
    <>
      <div className={`humberger__menu__overlay ${
        isShowHumberger ? "active" : ""}`} 
        onClick={()=>setShowHumberger(false)}
        />
      <div className={`humberger__menu__wrapper ${
        isShowHumberger ? "show" : ""}`}
      >
        <div className='header__logo'>
          <h1>DT SHOP</h1>
        </div>
        <div className='humberger__menu__cart'>
          <ul>
            <li>
              <Link to={ROUTERS.USER.SHOPPING_CART}>
                <AiOutlineShoppingCart /><span>{cartRedux.totalQuantity}</span>
              </Link>
            </li>
          </ul>
          <div className='header__cart__price'>
            Giỏ hàng: <span>{formater(cartRedux.totalPrice)}</span>
          </div>
        </div>
        <div className='humberger__menu__widget'>
         <div className='header__top__right__auth'>
           {userSession ? (
             <Link to={ROUTERS.USER.PROFILE}>
               <FaUserCircle /> {userSession.name}
             </Link>
           ) : (
             <span onClick={() => navigate(ROUTERS.USER.LOGIN)}>
               <FaUserCircle /> Đăng nhập
             </span>
           )}
          </div>
        </div>
        <div className='humberger__menu__nav'>
          <ul>
            {
              menus.map((menu, menuKey)=>(
                <li key={menuKey} to={menu.path}>
                  <Link 
                    to={menu.path}
                    onClick={()=>{
                    const newMenus=[...menus];
                    newMenus[menuKey].isShowSubMenu = !newMenus[menuKey].isShowSubMenu;
                    setMenus(newMenus);
                  }}>
                    {menu.name}
                    {menu.child && (
                      menu.isShowSubMenu ? (
                        <AiOutlineDownCircle />
                      ) : (
                        <AiOutlineUpCircle />
                      ))}
                  </Link>
                  {menu.child && (
                    <ul className={`header__menu__dropdown ${ menu.isShowSubMenu ? "show__submenu" : "" }`}>
                      {menu.child.map((childItem,childKey)=>(
                        <li key={`${menuKey}-${childKey}`}>
                          <Link to={childItem.path}>{childItem.name}</Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))
            }

          </ul>
        </div>
        <div className='header__top__right__social'>
          <Link to={''}>
            <FaSquareFacebook />
          </Link>
          <Link to={''}>
            <IoLogoInstagram />
          </Link>
        </div>
        <div className='humberger__menu__contact'>
          <ul>
            <li>
              <MdEmail />tinhlv219@gmail.com
            </li>
            <li>Free Ship cho đơn hàng từ {formater(299000)}</li>
          </ul>
        </div>
      </div>
      
      <div className='header__top'>
        <div className='container'>
          <div className='row'>
            <div className='col-6 header__top_left'>
              <ul>
                <li><MdEmail />tinhlv219@gmail.com</li>
                <li>Free Ship cho đơn hàng từ {formater(299000)}</li>
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
                  {userSession ? (
                    <span onClick={() => navigate(ROUTERS.USER.PROFILE)}><FaUserCircle /> {userSession.name}</span>
                  ) : (
                    <span onClick={() => navigate(ROUTERS.USER.LOGIN)}><FaUserCircle />Đăng nhập</span>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-3'>
            <div className='header__logo'>
              <h1>DT SHOP</h1>
            </div>
          </div>
          <div className='col-lg-6'>
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
          <div className='col-lg-3'>
            <div className='header__cart'>
              <div className='header__cart_price'>
                <span>{formater(cartRedux.totalPrice)}</span>
              </div>
              <ul>
                <li>
                  <Link to={ROUTERS.USER.SHOPPING_CART}>
                    <AiOutlineShoppingCart /><span>{cartRedux.totalQuantity}</span>
                  </Link>
                </li>
              </ul>
            </div>
            <div className='humberger__open' >
              <AiOutlineMenu  onClick={()=>setShowHumberger(true)}/>
            </div>


          </div>
        </div>
      </div>
      <div className='container'>
        <div className='row hero__categories_container'>
          <div className='col-lg-3 col-md-12 col-sm-12 col-xs-12 hero__categories'>
            <div className='hero__categories_all' onClick={() => setShowCategories(!isShowCategories)}>
              <AiOutlineMenu />
              Danh sách sản phẩm
            </div>
              <ul className={isShowCategories ? "" : "hidden"}>
                  {
                    categories?.map((category) => (
                      <li key={category.id}>
                        <Link to={ROUTERS.USER.PRODUCTS}>{category.name}</Link>
                      </li>
                    ))}
              </ul>
          </div>
          <div className='col-lg-9  col-md-12 col-sm-12 col-xs-12 hero__search_container'>
            <div className='hero__search'>
              <div className='hero__search_form'>
                <form onSubmit={(e) => { e.preventDefault(); navigate(ROUTERS.USER.PRODUCTS); }}>
                  <input
                    type='text'
                    placeholder='Bạn cần tìm gì?'
                    value={searchQuery}
                    onChange={(e) => dispatch(setSearchQuery(e.target.value))}
                  />
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
            {
              isHome && (

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
              )
            }
          </div>
        </div>
      </div>
    </>

  );
};

export default memo(Header);