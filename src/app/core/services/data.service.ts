/*

  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  Created : 17-March-2020
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.

*/
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  onCategoryDataListChanged: BehaviorSubject<Array<any>> = new BehaviorSubject([]);
  constructor(private http: HttpClient) { }


  pages = [
    {
      title: 'Home',
      url: '/tabs/home',
      icon: 'home.png'
    },
    // {
    //   title: 'Men',
    //   url: '/tabs/home',
    //   icon: 'polo.png'
    // },
    // {
    //   title: 'Women',
    //   url: '/tabs/home',
    //   icon: 'dresses.png'
    // },
    // {
    //   title: 'Kids',
    //   url: '/tabs/home',
    //   icon: 'baby-clothes.png'
    // },
    // {
    //   title: 'Home & Living',
    //   url: '/tabs/home',
    //   icon: 'idea.png'
    // },
    // {
    //   title: 'Gadgets',
    //   url: '/tabs/home',
    //   icon: 'gadget.png'
    // },
    // {
    //   title: 'Theme Stores',
    //   url: '/tabs/home',
    //   icon: 'shop.png'
    // },
    // {
    //   title: 'Gift Card',
    //   url: '/tabs/home',
    //   icon: 'gift-card.png'
    // },
    {
      title: 'Refer & Earn',
      url: '/tabs/home',
      icon: 'gift-box.png'
    },
    {
      title: 'Wishlist',
      url: '/tabs/home',
      icon: 'wishlist.png'
    },
    {
      title: 'Orders',
      url: '/orders',
      icon: 'order.png'
    },
    {
      title: 'Account',
      url: '/login',
      icon: 'user.png'
    },
    {
      title: 'Help',
      url: '/help',
      icon: 'question.png'
    },
    {
      title: 'CONTACT US',
      url: '/tabs/home',
      icon: 'customer-service-agent.png'
    },
    {
      title: 'MORE',
      url: '/tabs/home',
      icon: 'more.png'
    },
    {
      title: 'Dashboard',
      url: '/dashboard',
      icon: 'more.png'
    },
    {
      title: 'Product',
      url: '/adminproduct',
      icon: 'more.png'
    },
    {
      title: 'Order',
      url: '/adminorder',
      icon: 'more.png'
    },
    {
      title: 'Category',
      url: '/admincategory',
      icon: 'more.png'
    },
    {
      title: 'User',
      url: '/adminuser',
      icon: 'more.png'
    },
  ];

  mainSlider = [
    {
      slug: 'men',
      name: 'MEN',
      img: 'assets/header/men.png'
    },
    {
      slug: 'women',
      name: 'WOMEN',
      img: 'assets/header/women.png'
    },
    {
      slug: 'sale',
      name: 'Sale',
      img: 'assets/header/sale.png'
    },
    {
      slug: 'kids',
      name: 'KIDS',
      img: 'assets/header/kids.png'
    },
    {
      slug: 'beatuty',
      name: 'BEATUTY',
      img: 'assets/header/beatuty.png'
    },
    {
      slug: 'home',
      name: 'HOME',
      img: 'assets/header/home.png'
    },
    {
      slug: 'gadgets',
      name: 'GADGETS',
      img: 'assets/header/gadgets.png'
    }
  ];

  // category = [
  //   {
  //     '_id': '123',
  //     'name': 'Mobile phones and accessories',
  //     'cover_image': [
  //       {
  //         '_id': '111',
  //         'image': 'https://pub.thisshop.com/shop/block/2019111/66329368_1572583692544.jpg'
  //       },
  //       {
  //         '_id': '222',
  //         'image': 'https://pub.thisshop.com/shop/block/2019111/76264354_1572583780793.png'
  //       },
  //       {
  //         '_id': '333',
  //         'image': 'https://pub.thisshop.com/shop/block/2019111/80264441_1572583813126.png'
  //       }
  //     ],
  //     'icon': '../../../assets/icon/Tilda_Icons_33_interior_couch.svg',
  //     'brands': [
  //       {
  //         '_id': '2123',
  //         'name': 'iPhone',
  //         'image': 'https://pub.thisshop.com/shop/default/20190924/46107227_1569307226757.png'
  //       },
  //       {
  //         '_id': '345',
  //         'name': 'vivo',
  //         'image': 'https://pub.thisshop.com/shop/default/20190924/3892098_1569307254659.png'
  //       },
  //       {
  //         '_id': '567',
  //         'name': 'oppo',
  //         'image': 'https://pub.thisshop.com/shop/default/20190924/26046598_1569307286850.png'
  //       },
  //       {
  //         '_id': '789',
  //         'name': 'HUAWEI',
  //         'image': 'https://pub.thisshop.com/shop/default/20190924/19617454_1569307319609.png'
  //       },
  //       {
  //         '_id': '890',
  //         'name': 'MI',
  //         'image': 'https://pub.thisshop.com/shop/default/20190924/90870042_1569307340345.png'
  //       },
  //       {
  //         '_id': '234',
  //         'name': 'HONOR',
  //         'image': 'https://pub.thisshop.com/shop/default/20190924/29817073_1569307366613.png'
  //       }
  //     ],
  //     'products': [
  //       {
  //         '_id': '456',
  //         'name': 'smartphone',
  //         'image': 'https://pub.thisshop.com/shop/block/20190816/63456397_1565925293076.jpg'
  //       },
  //       {
  //         '_id': '678',
  //         'name': 'Mobile phone case',
  //         'image': 'https://pub.thisshop.com/shop/block/20190816/29158169_1565925310022.jpg'
  //       },
  //       {
  //         '_id': '899',
  //         'name': 'Charger',
  //         'image': 'https://pub.thisshop.com/shop/block/20190816/52969088_1565925353891.jpg'
  //       },
  //       {
  //         '_id': '122',
  //         'name': 'battery',
  //         'image': 'https://pub.thisshop.com/shop/block/20190816/49348910_1565925397960.jpg'
  //       },
  //       {
  //         '_id': '221',
  //         'name': 'charging',
  //         'image': 'https://pub.thisshop.com/shop/block/20190816/56897728_1565925415911.jpg'
  //       }
  //     ]
  //   },
  //   {
  //     '_id': '1423',
  //     'name': 'computer',
  //     'cover_image': [
  //       {
  //         '_id': '313',
  //         'image': 'https://pub.thisshop.com/shop/default/2019101/65677458_1569902283086.jpg'
  //       },
  //       {
  //         '_id': '343',
  //         'image': 'https://pub.thisshop.com/shop/block/20191030/4301303_1572408321147.png'
  //       },
  //       {
  //         '_id': '342',
  //         'image': 'https://pub.thisshop.com/shop/block/20191025/22223547_1571970314476.png'
  //       }
  //     ],
  //     'icon': '../../../assets/icon/Tilda_Icons_33_interior_bathroom.svg',
  //     'brands': [
  //       {
  //         '_id': '133',
  //         'name': 'acer',
  //         'image': 'https://pub.thisshop.com/shop/default/20190924/59927070_1569306996110.png'
  //       },
  //       {
  //         '_id': '213',
  //         'name': 'Lenovo',
  //         'image': 'https://pub.thisshop.com/shop/default/20190924/45012744_1569307003968.png'
  //       },
  //       {
  //         '_id': '443',
  //         'name': 'Asus',
  //         'image': 'https://pub.thisshop.com/shop/default/20190924/15466763_1569307033203.png'
  //       },
  //       {
  //         '_id': '324',
  //         'name': 'AOC',
  //         'image': 'https://pub.thisshop.com/shop/default/20190924/96586706_1569307046183.png'
  //       },
  //       {
  //         '_id': '454',
  //         'name': 'RAZER',
  //         'image': 'https://pub.thisshop.com/shop/default/20190924/18175971_1569307058672.png'
  //       },
  //       {
  //         '_id': '421',
  //         'name': 'hp',
  //         'image': 'https://pub.thisshop.com/shop/default/20190924/89023748_1569307089799.png'
  //       }
  //     ],
  //     'products': [
  //       {
  //         '_id': '546',
  //         'name': 'Laptop',
  //         'image': 'https://pub.thisshop.com/shop/default/20190920/3230485_1568964607806.jpg'
  //       },
  //       {
  //         '_id': '654',
  //         'name': 'tablet',
  //         'image': 'https://pub.thisshop.com/shop/default/20190920/40149826_1568964592007.jpg'
  //       },
  //       {
  //         '_id': '546',
  //         'name': 'Gaming Lab',
  //         'image': 'https://pub.thisshop.com/shop/default/20190920/6145988_1568964627384.jpg'
  //       },
  //       {
  //         '_id': '562',
  //         'name': 'Game machine',
  //         'image': 'https://pub.thisshop.com/shop/default/20190920/87736760_1568964663351.jpg'
  //       },
  //       {
  //         '_id': '531',
  //         'name': 'Computer screen',
  //         'image': 'https://pub.thisshop.com/shop/default/20190920/80023178_1568964709719.jpg'
  //       },
  //       {
  //         '_id': '532',
  //         'name': 'accessory',
  //         'image': 'https://pub.thisshop.com/shop/default/20190920/22885997_1568964755639.jpg'
  //       },
  //       {
  //         '_id': '587',
  //         'name': 'Printer',
  //         'image': 'https://pub.thisshop.com/shop/default/20190920/48734785_1568964783023.jpg'
  //       },
  //       {
  //         '_id': '804',
  //         'name': 'Mouse and mouse pad',
  //         'image': 'https://pub.thisshop.com/shop/default/20190920/77116440_1568964816220.jpg'
  //       },
  //       {
  //         '_id': '089',
  //         'name': 'Computer assembly',
  //         'image': 'https://pub.thisshop.com/shop/default/20190920/94789525_1568964803525.jpg'
  //       },
  //       {
  //         '_id': '012',
  //         'name': 'Keyboard gamer',
  //         'image': 'https://pub.thisshop.com/shop/default/20190920/47831382_1568964830560.jpg'
  //       },
  //       {
  //         '_id': '315',
  //         'name': 'Headphones and speakers',
  //         'image': 'https://pub.thisshop.com/shop/default/20190920/66361540_1568964840767.jpg'
  //       }
  //     ]
  //   },
  //   {
  //     '_id': '1023',
  //     'name': 'Digital goods',
  //     'icon': '../../../assets/icon/Tilda_Icons_33_interior_bathroom.svg',
  //     'products': [
  //       {
  //         '_id': '1223',
  //         'name': 'Mirrorless camera',
  //         'image': 'https://pub.thisshop.com/shop/default/20190925/21744109_1569378461027.jpg'
  //       },
  //       {
  //         '_id': '1233',
  //         'name': 'Dslr camera',
  //         'image': 'https://pub.thisshop.com/shop/category/icon/1548756404771.jpg'
  //       },
  //       {
  //         '_id': '1243',
  //         'name': 'Compact camera',
  //         'image': 'https://pub.thisshop.com/shop/category/icon/1548756438407.jpg'
  //       },
  //       {
  //         '_id': '1235',
  //         'name': 'Instant camera',
  //         'image': 'https://pub.thisshop.com/shop/category/icon/1548756479082.jpg'
  //       },
  //       {
  //         '_id': '1236',
  //         'name': 'Action cam camera',
  //         'image': 'https://pub.thisshop.com/shop/category/icon/1548756639453.jpg'
  //       },
  //       {
  //         '_id': '1237',
  //         'name': 'camera lens',
  //         'image': 'https://pub.thisshop.com/shop/default/20190919/55514333_1568879951537.jpg'
  //       },
  //       {
  //         '_id': '1238',
  //         'name': 'Camera accessory',
  //         'image': 'https://pub.thisshop.com/shop/default/20190925/88579203_1569377568458.jpg'
  //       },
  //       {
  //         '_id': '1239',
  //         'name': 'camera lens',
  //         'image': 'https://pub.thisshop.com/shop/default/20190919/55514333_1568879951537.jpg'
  //       },
  //       {
  //         '_id': '1230',
  //         'name': 'Drone',
  //         'image': 'https://pub.thisshop.com/shop/default/20190925/43197089_1569377788973.jpg'
  //       },
  //       {
  //         '_id': '12311',
  //         'name': 'closed circuit camera',
  //         'image': 'https://pub.thisshop.com/shop/category/icon/1548757117457.jpg'
  //       },
  //       {
  //         '_id': '12312',
  //         'name': 'Intelligent wearable device',
  //         'image': 'https://pub.thisshop.com/shop/category/icon/1548757191975.jpg'
  //       },
  //       {
  //         '_id': '12313',
  //         'name': 'Digital accessory',
  //         'image': 'https://pub.thisshop.com/shop/category/icon/1548757856154.jpg'
  //       },
  //       {
  //         '_id': '12314',
  //         'name': 'Smart Life',
  //         'image': 'https://pub.thisshop.com/shop/category/icon/1560501463056.jpg'
  //       },
  //       {
  //         '_id': '12315',
  //         'name': 'Headphones',
  //         'image': 'https://pub.thisshop.com/shop/category/icon/1548758006528.jpg'
  //       },
  //       {
  //         '_id': '12316',
  //         'name': 'Loudspeaker',
  //         'image': 'https://pub.thisshop.com/shop/category/icon/1548758060300.jpg'
  //       }
  //     ]
  //   },

  // ];

  category = [
    {
      '_id': '123',
      'name': 'Health',
      'cover_image': [
        {
          '_id': '111',
          'image': 'https://pub.thisshop.com/shop/block/2019111/66329368_1572583692544.jpg'
        },
        {
          '_id': '222',
          'image': 'https://pub.thisshop.com/shop/block/2019111/76264354_1572583780793.png'
        },
        {
          '_id': '333',
          'image': 'https://pub.thisshop.com/shop/block/2019111/80264441_1572583813126.png'
        }
      ],
      'icon': '../../../assets/icon/Tilda_Icons_33_interior_couch.svg',
      'brands': [
        {
          '_id': '2123',
          'name': 'iPhone',
          'image': 'https://pub.thisshop.com/shop/default/20190924/46107227_1569307226757.png'
        },
        {
          '_id': '345',
          'name': 'vivo',
          'image': 'https://pub.thisshop.com/shop/default/20190924/3892098_1569307254659.png'
        },
        {
          '_id': '567',
          'name': 'oppo',
          'image': 'https://pub.thisshop.com/shop/default/20190924/26046598_1569307286850.png'
        },
        {
          '_id': '789',
          'name': 'HUAWEI',
          'image': 'https://pub.thisshop.com/shop/default/20190924/19617454_1569307319609.png'
        },
        {
          '_id': '890',
          'name': 'MI',
          'image': 'https://pub.thisshop.com/shop/default/20190924/90870042_1569307340345.png'
        },
        {
          '_id': '234',
          'name': 'HONOR',
          'image': 'https://pub.thisshop.com/shop/default/20190924/29817073_1569307366613.png'
        }
      ],
      'products': [
        {
          '_id': '456',
          'name': 'smartphone',
          'image': 'https://pub.thisshop.com/shop/block/20190816/63456397_1565925293076.jpg'
        },
        {
          '_id': '678',
          'name': 'Mobile phone case',
          'image': 'https://pub.thisshop.com/shop/block/20190816/29158169_1565925310022.jpg'
        },
        {
          '_id': '899',
          'name': 'Charger',
          'image': 'https://pub.thisshop.com/shop/block/20190816/52969088_1565925353891.jpg'
        },
        {
          '_id': '122',
          'name': 'battery',
          'image': 'https://pub.thisshop.com/shop/block/20190816/49348910_1565925397960.jpg'
        },
        {
          '_id': '221',
          'name': 'charging',
          'image': 'https://pub.thisshop.com/shop/block/20190816/56897728_1565925415911.jpg'
        }
      ]
    },
    {
      '_id': '1423',
      'name': 'Vegetables',
      'cover_image': [
        {
          '_id': '313',
          'image': 'https://pub.thisshop.com/shop/default/2019101/65677458_1569902283086.jpg'
        },
        {
          '_id': '343',
          'image': 'https://pub.thisshop.com/shop/block/20191030/4301303_1572408321147.png'
        },
        {
          '_id': '342',
          'image': 'https://pub.thisshop.com/shop/block/20191025/22223547_1571970314476.png'
        }
      ],
      'icon': '../../../assets/icon/Tilda_Icons_33_interior_bathroom.svg',
      'brands': [
        {
          '_id': '133',
          'name': 'acer',
          'image': 'https://pub.thisshop.com/shop/default/20190924/59927070_1569306996110.png'
        },
        {
          '_id': '213',
          'name': 'Lenovo',
          'image': 'https://pub.thisshop.com/shop/default/20190924/45012744_1569307003968.png'
        },
        {
          '_id': '443',
          'name': 'Asus',
          'image': 'https://pub.thisshop.com/shop/default/20190924/15466763_1569307033203.png'
        },
        {
          '_id': '324',
          'name': 'AOC',
          'image': 'https://pub.thisshop.com/shop/default/20190924/96586706_1569307046183.png'
        },
        {
          '_id': '454',
          'name': 'RAZER',
          'image': 'https://pub.thisshop.com/shop/default/20190924/18175971_1569307058672.png'
        },
        {
          '_id': '421',
          'name': 'hp',
          'image': 'https://pub.thisshop.com/shop/default/20190924/89023748_1569307089799.png'
        }
      ],
      'products': [
        {
          '_id': '546',
          'name': 'Laptop',
          'image': 'https://pub.thisshop.com/shop/default/20190920/3230485_1568964607806.jpg'
        },
        {
          '_id': '654',
          'name': 'tablet',
          'image': 'https://pub.thisshop.com/shop/default/20190920/40149826_1568964592007.jpg'
        },
        {
          '_id': '546',
          'name': 'Gaming Lab',
          'image': 'https://pub.thisshop.com/shop/default/20190920/6145988_1568964627384.jpg'
        },
        {
          '_id': '562',
          'name': 'Game machine',
          'image': 'https://pub.thisshop.com/shop/default/20190920/87736760_1568964663351.jpg'
        },
        {
          '_id': '531',
          'name': 'Computer screen',
          'image': 'https://pub.thisshop.com/shop/default/20190920/80023178_1568964709719.jpg'
        },
        {
          '_id': '532',
          'name': 'accessory',
          'image': 'https://pub.thisshop.com/shop/default/20190920/22885997_1568964755639.jpg'
        },
        {
          '_id': '587',
          'name': 'Printer',
          'image': 'https://pub.thisshop.com/shop/default/20190920/48734785_1568964783023.jpg'
        },
        {
          '_id': '804',
          'name': 'Mouse and mouse pad',
          'image': 'https://pub.thisshop.com/shop/default/20190920/77116440_1568964816220.jpg'
        },
        {
          '_id': '089',
          'name': 'Computer assembly',
          'image': 'https://pub.thisshop.com/shop/default/20190920/94789525_1568964803525.jpg'
        },
        {
          '_id': '012',
          'name': 'Keyboard gamer',
          'image': 'https://pub.thisshop.com/shop/default/20190920/47831382_1568964830560.jpg'
        },
        {
          '_id': '315',
          'name': 'Headphones and speakers',
          'image': 'https://pub.thisshop.com/shop/default/20190920/66361540_1568964840767.jpg'
        }
      ]
    },
    {
      '_id': '1023',
      'name': 'Digital goods',
      'icon': '../../../assets/icon/Tilda_Icons_33_interior_bathroom.svg',
      'products': [
        {
          '_id': '1223',
          'name': 'Mirrorless camera',
          'image': 'https://pub.thisshop.com/shop/default/20190925/21744109_1569378461027.jpg'
        },
        {
          '_id': '1233',
          'name': 'Dslr camera',
          'image': 'https://pub.thisshop.com/shop/category/icon/1548756404771.jpg'
        },
        {
          '_id': '1243',
          'name': 'Compact camera',
          'image': 'https://pub.thisshop.com/shop/category/icon/1548756438407.jpg'
        },
        {
          '_id': '1235',
          'name': 'Instant camera',
          'image': 'https://pub.thisshop.com/shop/category/icon/1548756479082.jpg'
        },
        {
          '_id': '1236',
          'name': 'Action cam camera',
          'image': 'https://pub.thisshop.com/shop/category/icon/1548756639453.jpg'
        },
        {
          '_id': '1237',
          'name': 'camera lens',
          'image': 'https://pub.thisshop.com/shop/default/20190919/55514333_1568879951537.jpg'
        },
        {
          '_id': '1238',
          'name': 'Camera accessory',
          'image': 'https://pub.thisshop.com/shop/default/20190925/88579203_1569377568458.jpg'
        },
        {
          '_id': '1239',
          'name': 'camera lens',
          'image': 'https://pub.thisshop.com/shop/default/20190919/55514333_1568879951537.jpg'
        },
        {
          '_id': '1230',
          'name': 'Drone',
          'image': 'https://pub.thisshop.com/shop/default/20190925/43197089_1569377788973.jpg'
        },
        {
          '_id': '12311',
          'name': 'closed circuit camera',
          'image': 'https://pub.thisshop.com/shop/category/icon/1548757117457.jpg'
        },
        {
          '_id': '12312',
          'name': 'Intelligent wearable device',
          'image': 'https://pub.thisshop.com/shop/category/icon/1548757191975.jpg'
        },
        {
          '_id': '12313',
          'name': 'Digital accessory',
          'image': 'https://pub.thisshop.com/shop/category/icon/1548757856154.jpg'
        },
        {
          '_id': '12314',
          'name': 'Smart Life',
          'image': 'https://pub.thisshop.com/shop/category/icon/1560501463056.jpg'
        },
        {
          '_id': '12315',
          'name': 'Headphones',
          'image': 'https://pub.thisshop.com/shop/category/icon/1548758006528.jpg'
        },
        {
          '_id': '12316',
          'name': 'Loudspeaker',
          'image': 'https://pub.thisshop.com/shop/category/icon/1548758060300.jpg'
        }
      ]
    },

  ];
}
