import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SwiperSlidesComponent } from '../swiper-slides/swiper-slides.component';
import { Home2Page } from './home2.page';


const routes: Routes = [
  {
    path: '',
    component: Home2Page,
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Home2PageRoutingModule {}
