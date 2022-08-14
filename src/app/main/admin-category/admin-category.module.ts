import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminCategoryRoutingModule } from './admin-category-routing.module';
import { AdminCategoryAddComponent } from './admin-category-add/admin-category-add.component';
import { AdminCategoryComponent } from './admin-category.component';
import { FileUploadComponent } from 'src/app/core/component/file-upload/file-upload.component';
import { FormsModule } from '@angular/forms';
import { AdminCategoryEditComponent } from './admin-category-edit/admin-category-edit.component';



@NgModule({
  declarations: [AdminCategoryComponent,AdminCategoryAddComponent,AdminCategoryEditComponent,FileUploadComponent],
  imports: [
    CommonModule,
    AdminCategoryRoutingModule,
    FormsModule
  ]
})
export class AdminCategoryModule { }
