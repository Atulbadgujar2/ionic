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
      img: 'assets/products/fruits&veggies3.png',
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
      img: 'assets/shop/home1.jpg',
      header: 'HOT DEALS',
      desc: 'Flat 2 Off On Your Favorite Products'
    },
    {
      img: 'assets/shop/home2.jpg',
      header: 'HOT DEALS',
      desc: 'Extra 5% Off On your Order'
    },
    {
      img: 'assets/shop/home3.jpg',
      header: 'HOT DEALS',
      desc: 'Flat 2 Off On Your Favorite Products'
    },
    {
      img: 'assets/shop/home1.jpg',
      header: 'HOT DEALS',
      desc: 'Flat 2 Off On Your Favorite Products'
    },
    {
      img: 'assets/shop/home1.jpg',
      header: 'HOT DEALS',
      desc: 'Flat 2 Off On Your Favorite Products'
    },
  ];

  specialForYou = [
    {
      img: 'assets/shop/home1.jpg',
      header: 'Grocery',
      footer: '+ SHOP'
    },
    {
      img: 'assets/shop/home1.jpg',
      header: 'Daal',
      footer: '+ SHOP'
    },
    {
      img: 'assets/shop/home1.jpg',
      header: 'Atta',
      footer: '+ SHOP'
    },
    {
      img: 'assets/shop/home1.jpg',
      header: 'Breads',
      footer: '+ SHOP'
    },
    {
      img: 'assets/shop/home1.jpg',
      header: 'Milk',
      footer: '+ SHOP'
    },
    {
      img: 'assets/shop/home1.jpg',
      header: 'Vegitables',
      footer: '+ SHOP'
    },
    {
      img: 'assets/shop/home1.jpg',
      header: 'Fruits',
      footer: '+ SHOP'
    },
    {
      img: 'assets/shop/home1.jpg',
      header: 'HOME',
      footer: '+ SHOP'
    },
    {
      img: 'assets/shop/home1.jpg',
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
      name: 'Eggs',
      img: 'assets/header/Vegetables1.png'
    },

    {
      slug: 'atta',
      name: 'Atta',
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

  shopCart = {
    CartType : '1',
    DeliveryChargeUrl : '1',
    DeliveryCharge : '1',
    CartItemCount : '2',
    DeliveryLimit : '1000',
    BagTotal : '515.00',
    CartTotal : '515.00',
    CartSaving : '265.00', 
    OrderTotal :   '265.00', 
    shopCartItem : [
    {
      ImageURl: 'assets/shop/home1.jpg',
      Name: 'HOT DEALS',
      Description: 'Flat 2 Off On Your Favorite Products',
      MRP: 'Flat 2 Off On Your Favorite Products',
      DiscountPrice: 'Flat 2 Off On Your Favorite Products',
      Saving : '45.00',
      Quantity : '1',
      QuantityMRP :'1 x 135.00',
      ProductId : '1'
    },
    {
      ImageURl: 'assets/shop/home1.jpg',
      Name: 'HOT DEALS 2',
      Description: 'Flat 2 Off On Your Favorite Products',
      MRP: 'Flat 2 Off On Your Favorite Products',
      DiscountPrice: 'Flat 2 Off On Your Favorite Products',
      Saving : '45.00',
      Quantity : '1',
      QuantityMRP :'1 x 135.00',
      ProductId : '1'
    }
  ]
};
  constructor() { }
}
