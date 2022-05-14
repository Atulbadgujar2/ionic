import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DummyDataService {

  products: any[] = [
    {
      img: 'assets/products/fruits&veggies2.png',
      off: 'Min. 60% off.',
      name : 'Product 1',
      price : '25.00',
      sale : '20.00'
    },
    {
      img: 'assets/products/fruits&veggies3.png',
      off: 'Min. 50% off.',
      name : 'Product 2',
      price : '23.00',
      sale : '200.00'
    },
    {
      img: 'assets/products/fruits&veggies4.png',
      off: 'Min. 50% off.',
      name : 'Product 3',
      price : '22.00',
      sale : '17.00'
    },
    {
      img: 'assets/products/fruits&veggies.png',
      off: 'Min. 40% off.',
      name : 'Product 4',
      price : '15.00',
      sale : '13.00'
    },
    {
      img: 'assets/products/fruits&veggies5.png',
      off: 'Min. 45% off.',
      name : 'Product 5',
      price : '17.00',
      sale : '14.00'
    },
    {
      img: 'assets/products/fruits&veggies3.png',
      off: 'Min. 70% off.',
      name : 'Product 6',
      price : '20.00',
      sale : '15.00'
    },
    {
      img: 'assets/products/fruits&veggies2.png',
      off: 'Min. 30% off.',
      name : 'Product 7',
      price : '56.00',
      sale : '50.00'
    },
    {
      img: 'assets/products/fruits&veggies.png',
      off: 'Min. 50% off.',
      name : 'Product 8',
      price : '46.00',
      sale : '35.00'
    },
    {
      img: 'assets/products/fruits&veggies4.png',
      off: 'Min. 60% off.',
      name : 'Product 9',
      price : '34.00',
      sale : '30.00'
    },
    {
      img: 'assets/products/fruits&veggies.png',
      off: 'Min. 60% off.',
      name : 'Product 10',
      price : '20.00',
      sale : '15.00'
    },
    {
      img: 'assets/products/fruits&veggies3.png.jpg',
      off: 'Min. 50% off.',
      name : 'Product 11',
      price : '34.00',
      sale : '23.00'
    },
    {
      img: 'assets/products/fruits&veggies2.png',
      off: 'Min. 40% off.',
      name : 'Product 12',
      price : '56.00',
      sale : '50.00'
    },
    {
      img: 'assets/products/fruits&veggies1.png',
      off: 'Min. 50% off.',
      name : 'Product 13',
      price : '30.00',
      sale : '25.00'
    },
    {
      img: 'assets/products/fruits&veggies.png',
      off: 'Min. 40% off.',
      name : 'Product 14',
      price : '60.00',
      sale : '45.00'
    },
    {
      img: 'assets/products/fruits&veggies5.png',
      off: 'Min. 45% off.',
      name : 'Product 15',
      price : '50.00',
      sale : '45.00',
    },
    {
      img: 'assets/products/fruits&veggies4.png',
      off: 'Min. 70% off.',
      name : 'Product 16',
      price : '30.00',
      sale : '24.00'
    },
    {
      img: 'assets/products/fruits&veggies3.png',
      off: 'Min. 30% off.',
      name : 'Product 17',
      price : '25.00',
      sale : '22.00'
    },
    {
      img: 'assets/products/fruits&veggies2.png',
      off: 'Min. 50% off.',
      name : 'Product 18',
      price : '22.00',
      sale : '17.00'
    },
    {
      img: 'assets/products/fruits&veggies1.png',
      off: 'Min. 60% off.',
      name : 'Product 19',
      price : '28.00',
      sale : '25.00'
    },
    {
      img: 'assets/products/fruits&veggies.png',
      off: 'Min. 40% off.',
      name : 'Product 20',
      price : '20.00',
      sale : '15.00'
    },
  ];

  productSlider = [
    {
      img: 'assets/shop/7.jpg',
      header: 'HOT DEALS',
      desc: 'Flat $2 Off On Your Favorite Styles'
    },
    {
      img: 'assets/shop/12.jpg',
      header: 'HOT DEALS',
      desc: 'Extra 5% Off On your Order'
    },
    {
      img: 'assets/shop/24.jpg',
      header: 'HOT DEALS',
      desc: 'Flat $2 Off On Your Favorite Styles'
    },
    {
      img: 'assets/shop/22.jpg',
      header: 'HOT DEALS',
      desc: 'Flat $2 Off On Your Favorite Styles'
    },
    {
      img: 'assets/shop/6.jpg',
      header: 'HOT DEALS',
      desc: 'Flat $2 Off On Your Favorite Styles'
    },
  ];

  specialForYou = [
    {
      img: 'assets/shop/1.jpg',
      header: 'HANDBAGS',
      footer: '+ SHOP'
    },
    {
      img: 'assets/shop/2.jpg',
      header: 'FOOTWEAR',
      footer: '+ FOR HER'
    },
    {
      img: 'assets/shop/3.jpg',
      header: 'SPORTSWEAR',
      footer: '+ SHOP'
    },
    {
      img: 'assets/shop/4.jpg',
      header: 'FOOTWEAR',
      footer: '+ FOR HIM'
    },
    {
      img: 'assets/shop/22.jpg',
      header: 'ETHIC WEAR',
      footer: '+ SHOP'
    },
    {
      img: 'assets/shop/6.jpg',
      header: 'WESTERN WEAR',
      footer: '+ FOR HER'
    },
    {
      img: 'assets/shop/11.jpg',
      header: 'KIDS WEAR',
      footer: '+ SHOP'
    },
    {
      img: 'assets/shop/12.jpg',
      header: 'HOME',
      footer: '+ SHOP'
    },
    {
      img: 'assets/shop/23.jpg',
      header: 'More',
      footer: '+ SHOP'
    },
  ];

  catSlider = [
    {
      slug: 'fruits',
      name: 'Fruits',
      img: 'assets/header/Fruits.png'
    },
    {
      slug: 'vegetables',
      name: 'Vegetables',
      img: 'assets/header/Vegetables1.png'
    },

    {
      slug: 'dairy',
      name: 'Dairy Bread and Eggs',
      img: 'assets/header/Vegetables1.png'
    },

    {
      slug: 'atta',
      name: 'Atta Dal and Oils',
      img: 'assets/header/Vegetables1.png'
    },

    {
      slug: 'bakery',
      name: 'Bakery',
      img: 'assets/header/Vegetables1.png'
    },

    

    // {
    //   slug: 'men',
    //   name: 'MEN',
    //   img: 'assets/header/men.png'
    // },
    // {
    //   slug: 'women',
    //   name: 'WOMEN',
    //   img: 'assets/header/women.png'
    // },
    // {
    //   slug: 'sale',
    //   name: 'Sale',
    //   img: 'assets/header/sale.png'
    // },
    // {
    //   slug: 'kids',
    //   name: 'KIDS',
    //   img: 'assets/header/kids.png'
    // },
    // {
    //   slug: 'beatuty',
    //   name: 'BEATUTY',
    //   img: 'assets/header/beatuty.png'
    // },
    // {
    //   slug: 'home',
    //   name: 'HOME',
    //   img: 'assets/header/home.png'
    // },
    // {
    //   slug: 'gadgets',
    //   name: 'GADGETS',
    //   img: 'assets/header/gadgets.png'
    // },
  ];
  constructor() { }
}
