import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminCategoryRoutingModule } from './admin-category-routing.module';
import { AdminCategoryAddComponent } from './admin-category-add/admin-category-add.component';


@NgModule({
  declarations: [AdminCategoryAddComponent],
  imports: [
    CommonModule,
    AdminCategoryRoutingModule
  ]
})
export class AdminCategoryModule { }
