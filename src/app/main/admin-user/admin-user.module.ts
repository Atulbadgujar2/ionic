import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminUserRoutingModule } from './admin-user-routing.module';
import { AdminUserComponent } from './admin-user.component';


@NgModule({
  declarations: [AdminUserComponent],
  imports: [
    CommonModule,
    AdminUserRoutingModule
  ]
})
export class AdminUserModule { }
