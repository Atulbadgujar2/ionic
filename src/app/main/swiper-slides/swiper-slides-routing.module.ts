import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SwiperSlidesComponent } from './swiper-slides.component';

const routes: Routes = [
  {
    path: '',
    component: SwiperSlidesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SwiperSlidesRoutingModule { }
