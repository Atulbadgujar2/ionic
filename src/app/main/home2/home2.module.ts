import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { SwiperModule } from 'swiper/angular';


import { DemotemplateModule } from '../demotemplate/demotemplate.module';
import { Home2PageRoutingModule } from './home2-routing.module';
import { Home2Page } from './home2.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Home2PageRoutingModule,
    SwiperModule,
    DemotemplateModule
  ],
  declarations: [Home2Page]
})
export class Home2PageModule {}
