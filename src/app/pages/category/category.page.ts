/*

  Authors :  (Atul Badgujar)  
  Created : 14-March-2022
 

*/
import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements OnInit {
  @ViewChild('content', { static: false }) private content: any;
  data: any;
  tabSelected: any;
  constructor(
    public modalController: ModalController,
    private dataServices: DataService,
    private router: Router
  ) {
    this.data = this.dataServices.category;
    this.tabSelected = this.data[0]._id;
  }

  ngOnInit() {

  }
  onMenuClick(cate_id) {

    this.tabSelected = cate_id;
    let yOffset = document.getElementById(cate_id).offsetTop;
    let yHOffset = document.getElementById(cate_id).offsetHeight;

    console.log(yOffset + " : " + yHOffset);
    this.content.scrollToPoint(0, yOffset, 1000);

  }

  onBrandClick(categoryId: any, brandId: any) {
    this.router.navigate(['products']);
    // this.router.navigateByUrl('search/' + categoryId + '/' + brandId);
  }

  onPromotionClick(cate2Id: any) {
    this.router.navigate(['products']);
    // this.router.navigateByUrl('search/' + cate2Id);
  }

  onCoverClick(coverId: any) {
    this.router.navigate(['products']);
    // this.router.navigateByUrl('promotion/' + coverId);
  }

  scrollTo(element: string) {

  }
  dismiss() {
    this.modalController.dismiss();
  }
}
