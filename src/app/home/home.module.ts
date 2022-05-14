import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { SwiperModule } from 'swiper/angular';

import { HomePageRoutingModule } from './home-routing.module';
import { DemotemplateModule } from '../demotemplate/demotemplate.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    SwiperModule,
    DemotemplateModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
