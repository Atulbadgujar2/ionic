/*

  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  Created : 17-March-2020
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.

*/
import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.page.html',
  styleUrls: ['./filter.page.scss'],
})
export class FilterPage implements OnInit {
  @ViewChild('content', { static: false }) private content: any;
  data: any;
  tabSelected: any;

  size;
  variation;
  constructor(
    public modalController: ModalController,
    private dataServices: DataService
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
    // this.router.navigateByUrl('search/' + categoryId + '/' + brandId);
  }

  onPromotionClick(cate2Id: any) {
    // this.router.navigateByUrl('search/' + cate2Id);
  }

  onCoverClick(coverId: any) {
    // this.router.navigateByUrl('promotion/' + coverId);
  }

  scrollTo(element: string) {

  }
  dismiss() {
    this.modalController.dismiss();
  }

  sizeChange(val) {
    this.size = val;
  }

  variationChange(val) {
    this.variation = val;
  }
}
