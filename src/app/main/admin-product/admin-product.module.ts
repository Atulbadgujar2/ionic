import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminProductRoutingModule } from './admin-product-routing.module';
import { AdminProductComponent } from './admin-product.component';
import { AdminProductEditComponent } from './admin-product-edit/admin-product-edit.component';
import { AdminProductAddComponent } from './admin-product-add/admin-product-add.component';
import { FileUploadComponent } from 'src/app/core/component/file-upload/file-upload.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [AdminProductComponent,AdminProductEditComponent,AdminProductAddComponent,FileUploadComponent],
  imports: [
    CommonModule,
    AdminProductRoutingModule,
    FormsModule
  ]
})
export class AdminProductModule { }
