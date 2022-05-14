import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'swiper',
    loadChildren: () => import('./swiper-slides/swiper-slides.module').then( m => m.SwiperSlidesModule)
  },
  {
    path: 'demotemplate',
    loadChildren: () => import('./demotemplate/demotemplate.module').then( m => m.DemotemplateModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
