/*

  Authors :  (Atul Badgujar)  
  Created : 14-March-2022
 

*/
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.page.html',
  styleUrls: ['./order-details.page.scss'],
})
export class OrderDetailsPage implements OnInit {

  orderDetail = [
    {
      status: 1,
      value: 'Order Confirmed',
      time: '12:00 PM',
      date: '12/12/2017'
    },
    {
      status: 1,
      value: 'Prepering Your Order',
      time: '10:00 AM',
      date: '13/12/2017'
    },
    {
      status: 2,
      value: 'Rider is picking up your order',
      time: '05:00 PM',
      date: '17/12/2017'
    },
    {
      status: 0,
      value: 'Rider is near by at your place',
      time: '06:00 PM',
      date: '19/12/2017'
    },
  ];

  constructor() { }

  ngOnInit() {
  }
  onClick() {

  }
}
