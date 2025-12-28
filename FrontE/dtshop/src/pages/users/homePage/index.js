import { memo, useState, useEffect, useMemo } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './style.scss'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import s1Img from 'assets/users/images/Slider/S1.jpg';
import s2Img from 'assets/users/images/Slider/S2.jpg';
import s3Img from 'assets/users/images/Slider/S3.jpg';
import s4Img from 'assets/users/images/Slider/S4.jpg';
import s5Img from 'assets/users/images/Slider/S5.jpg';
import s6Img from 'assets/users/images/Slider/S6.jpg';
import s7Img from 'assets/users/images/Slider/S7.jpg';
import s8Img from 'assets/users/images/Slider/S8.jpg';
import s9Img from 'assets/users/images/Slider/S9.jpg';
import bann1 from 'assets/users/images/bannerB/banner1.png';
import bann2 from 'assets/users/images/bannerB/banner2.png';

import { ProductsCard } from 'component';
import { featProducts } from 'utils/common';
import { useGetCategoriesUS, useGetProductsUS } from "api/homePage";



const HomePage = () => {
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
  const { data: categories } = useGetCategoriesUS();
  const { data: products } = useGetProductsUS();

  // pagination and tabs state
  const PAGE_SIZE = 12;
  const [selectedTab, setSelectedTab] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    // reset to first page when switching tabs
    setCurrentPage(1);
  }, [selectedTab]);

  const renderFeaturedProducts = () => {
    const tabList = categories?.map((categery) => (
      <Tab key={categery.id}>{categery.name}</Tab>
    )) || [];

    const tabPanels = (categories || []).map((category, idx) => {
      const list = (products || []).filter((product) => Number(product.category_id) === Number(category.id)) || [];
      const total = list.length;
      const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE));
      const page = selectedTab === idx ? currentPage : 1;
      const start = (page - 1) * PAGE_SIZE;
      const view = list.slice(start, start + PAGE_SIZE);

      return (
        <TabPanel key={idx}>
          <div className="row">
            {view.map((product) => (
              <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12" key={product.id}>
                <ProductsCard product={product} />
              </div>
            ))}
          </div>
          {totalPages > 1 && selectedTab === idx && (
            <div className="hp-pagination">
              <button className="hp-pagination__btn hp-pagination__prev" disabled={page === 1} onClick={() => setCurrentPage((s) => Math.max(1, s - 1))}>Prev</button>
              {Array.from({ length: totalPages }).map((_, i) => (
                <button key={i} className={`hp-pagination__page ${page===i+1 ? 'hp-pagination__page--active' : ''}`} onClick={() => setCurrentPage(i+1)}>{i+1}</button>
              ))}
              <button className="hp-pagination__btn hp-pagination__next" disabled={page === totalPages} onClick={() => setCurrentPage((s) => Math.min(totalPages, s + 1))}>Next</button>
            </div>
          )}
        </TabPanel>
      );
    });

    return (
      <Tabs selectedIndex={selectedTab} onSelect={(i) => setSelectedTab(i)}>
        <TabList>{tabList}</TabList>
        {tabPanels}
      </Tabs>
    );
  };

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
          {renderFeaturedProducts()}
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
