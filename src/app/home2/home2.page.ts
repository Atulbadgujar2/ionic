import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home2.page.html',
  styleUrls: ['home2.page.scss'],
})
export class Home2Page {

  constructor(private route: Router) {}

  nextpage() {
    this.route.navigate(['/swiper']);
  }

  nextpage2() {
    this.route.navigate(['/demotemplate']);
  }

}
