import { memo } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './style.scss'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import s1Img from 'assets/users/images/Slider/S1.jpg';
import s2Img from 'assets/users/images/Slider/S2.jpg';
import s3Img from 'assets/users/images/Slider/S3.jpg';
import s4Img from 'assets/users/images/Slider/S4.jpg';
import s5Img from 'assets/users/images/Slider/S5.jpg';
import s6Img from 'assets/users/images/Slider/S6.jpg';
import s7Img from 'assets/users/images/Slider/S7.jpg';
import s8Img from 'assets/users/images/Slider/S8.jpg';
import s9Img from 'assets/users/images/Slider/S9.jpg';
import feat1 from 'assets/users/images/Features/iphone_17_256.jpg';
import feat2 from 'assets/users/images/Features/iphone_air256.jpg';
import feat3 from 'assets/users/images/Features/iphone-14_128.jpg';
import feat4 from 'assets/users/images/Features/iphone-15-plus_1__1.jpg';
import feat5 from 'assets/users/images/Features/samsung-galaxy-s24.jpg';
import feat6 from 'assets/users/images/Features/samsung-galaxy-z-fold-7-xanh256.jpg';
import feat7 from 'assets/users/images/Features/SSG_S25_U12G_256G.jpg';
import bann1 from 'assets/users/images/bannerB/banner1.jpg';
import bann2 from 'assets/users/images/bannerB/banner2.jpg';
import { Link } from 'react-router-dom';
import { formater } from 'utils/formater';



const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const sliderItem = [
  {
    bgImg: s1Img,
    name: " ",
  },
  {
    bgImg: s2Img,
    name: " ",
  },
  {
    bgImg: s3Img,
    name: " ",
  },
  {
    bgImg: s4Img,
    name: " ",
  },
  {
    bgImg: s5Img,
    name: " ",
  },
  {
    bgImg: s6Img,
    name: " ",
  },
  {
    bgImg: s7Img,
    name: " ",
  },
  {
    bgImg: s8Img,
    name: " ",
  },
  {
    bgImg: s9Img,
    name: " ",
  },
];

const featProducts = {
  all: {
    title: 'Toàn bộ',
    products: [
      {
        img: feat1,
        name: 'Sản Phẩm 0',
        price: 20000,
      },
      {
        img: feat2,
        name: 'Sản Phẩm 1',
        price: 20000,
      },
      {
        img: feat3,
        name: 'Sản Phẩm 2',
        price: 20000,
      },
    ]
  },
  SanPham1: {
    title: 'Loai1',
    products: [
      {
        img: feat4,
        name: 'Sản Phẩm 3',
        price: 20000,
      }
    ]
  },
}

const renderFeaturedProducts = (data) => {
  const tabList = [];
  const TabPanels = [];

  Object.keys(data).forEach((key, index) => {
    tabList.push(<Tab key={index}>{data[key].title}</Tab>)
    const TabPanel = [];
    data[key].products.forEach((item, j) => {
      TabPanel.push(<div className='col-lg-3' key={j}>
        <div className='featured_item'>
          <div className='featured_item_pic'
          style={
            {
              backgroundImage:`url(${item.img})`
            }}>
            <ul className='featured_item_pic_hover'>
              <li>
                <AiOutlineEye />
              </li>
              <li>
                <AiOutlineShoppingCart />
              </li>
            </ul>
          </div>
          <div className='featured_item_text'>
            <h6>
              <Link to=''>{item.name}</Link>
            </h6>
            <h5>{formater(item.price)}</h5>
          </div>
        </div>
      </div>);
    });
    TabPanels.push(TabPanel);
  });


  return (
    <Tabs>
      <TabList>{tabList}</TabList>
      {
        TabPanels.map((item, key) => (
          <TabPanel key={key}>
            <div className='row'>
              {item}
            </div>
          </TabPanel>
        ))}
    </Tabs>
  );
};


const HomePage = () => {
  return (
    <>
      {/*Categories Begin*/}
      <div className='container container__categories_slider'>
        <Carousel responsive={responsive} className='categories_slider'>
          {
            sliderItem.map((item, key) => (
              <div
                className='categories_slider_item'
                style={{ backgroundImage: `url(${item.bgImg})` }}
                key={key}
              >
                <p>{item.name}</p>
              </div>
            ))
          }

        </Carousel>
      </div>
      {/*Categories End*/}
      {/*Feature Begin*/}
      <div className='container'>
        <div className='featured'>
          <div className='section-title'>
            <h2>Sản phẩm nổi bật</h2>
          </div>
          {renderFeaturedProducts(featProducts)}
        </div>
      </div>
      {/*Feature End*/}
      {/*Banner Begin*/}
      <div className="container">
        <div className="banner">
          <div className="banner_pic">
            <img src={bann1} alt="banner" />
        </div>
          <div className="banner_pic">
            <img src={bann2} alt="banner" />
        </div>
      </div>
    </div>

      {/*Banner End*/}

    </>
  );
};

export default memo(HomePage);
