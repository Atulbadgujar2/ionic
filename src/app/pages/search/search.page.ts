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
