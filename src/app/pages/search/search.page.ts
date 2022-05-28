/*

  Authors :  (Atul Badgujar)  
  Created : 14-March-2022
 

*/
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  forYou = [
    {
      img: 'assets/shop/home1.jpg',
      header: 'Veg',
      footer: '+ SHOP'
    },
    {
      img: 'assets/shop/home1.jpg',
      header: 'Fruits',
      footer: '+ SHOP'
    },
    {
      img: 'assets/shop/home1.jpg',
      header: 'Bread',
      footer: '+ SHOP'
    },
    {
      img: 'assets/shop/home1.jpg',
      header: 'Grocery',
      footer: '+ FOR Everyone'
    },
    {
      img: 'assets/shop/home1.jpg',
      header: 'Dairy',
      footer: '+ SHOP'
    },
    {
      img: 'assets/shop/home2.jpg',
      header: 'Dairy',
      footer: '+ FOR SHOP'
    },
    {
      img: 'assets/shop/home3.jpg',
      header: 'Dairy',
      footer: '+ SHOP'
    },
    {
      img: 'assets/shop/home1.jpg',
      header: 'HOME',
      footer: '+ SHOP'
    },
    {
      img: 'assets/shop/home2.jpg',
      header: 'More',
      footer: '+ SHOP'
    },
  ];
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  onCategorySelect(item) {
    console.log('item', item);
    //
    this.router.navigate(['main-category']);
  }

}
