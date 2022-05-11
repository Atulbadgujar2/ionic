import { Component, OnInit } from '@angular/core';

import SwiperCore, { Autoplay, Keyboard, Pagination, Scrollbar, Zoom } from 'swiper';

SwiperCore.use([Autoplay, Keyboard, Pagination, Scrollbar, Zoom]);

@Component({
  selector: 'app-swiper',
  templateUrl: './swiper-slides.component.html',
  styleUrls: ['./swiper-slides.component.scss'],
})
export class SwiperSlidesComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

}
