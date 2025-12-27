import feat1 from 'assets/users/images/Features/iphone_17_256.jpg';
import feat2 from 'assets/users/images/Features/iphone_air256.jpg';
import feat3 from 'assets/users/images/Features/iphone-14_128.jpg';
import feat4 from 'assets/users/images/Features/iphone-15-plus_1__1.jpg';
import feat5 from 'assets/users/images/Features/samsung-galaxy-s24.jpg';
import feat6 from 'assets/users/images/Features/samsung-galaxy-z-fold-7-xanh256.jpg';
import feat7 from 'assets/users/images/Features/SSG_S25_U12G_256G.jpg';


export const featProducts = {
  all: {
    title: 'Toàn bộ',
    products: [
      {
        id: 1,
        img: feat1,
        name: 'Sản Phẩm 0',
        price: 20000,
      },
      {
        id: 2,
        img: feat2,
        name: 'Sản Phẩm 1',
        price: 20000,
      },
      {
        id: 3,
        img: feat3,
        name: 'Sản Phẩm 2',
        price: 20000,
      },
      {
        id: 4,
        img: feat4,
        name: 'Sản Phẩm 3',
        price: 20000,
      },
      {
        id: 5,
        img: feat5,
        name: 'Sản Phẩm 4',
        price: 20000,
      },
      {
        id: 6,
        img: feat6,
        name: 'Sản Phẩm 5',
        price: 20000,
      },
      {
        id: 7,
        img: feat7,
        name: 'Sản Phẩm 6',
        price: 20000,
      },
    ]
  },
  SanPham1: {
    title: 'Loai1',
    products: [
      {
        id: 8,
        img: feat4,
        name: 'Sản Phẩm 3',
        price: 20000,
      },
      {
        id: 9,
        img: feat5,
        name: 'Sản Phẩm 4',
        price: 20000,
      },
    ]
  },
  SanPham2: {
    title: 'Loai2',
    products: [
      {
        id: 10,
        img: feat6,
        name: 'Sản Phẩm 5',
        price: 20000,
      },
      {
        id: 11,
        img: feat7,
        name: 'Sản Phẩm 6',
        price: 20000,
      },
    ]
  },
}

export const optionsUseQuery = {
  retry: 0,
  refetchOnWindowFocus: false,
};