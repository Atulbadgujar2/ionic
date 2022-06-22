import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminCategoryRoutingModule } from './admin-category-routing.module';
import { AdminCategoryAddComponent } from './admin-category-add/admin-category-add.component';
import { AdminCategoryComponent } from './admin-category.component';


@NgModule({
  declarations: [AdminCategoryComponent,AdminCategoryAddComponent],
  imports: [
    CommonModule,
    AdminCategoryRoutingModule
  ]
})
export class AdminCategoryModule { }
