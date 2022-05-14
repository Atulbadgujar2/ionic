import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemotemplateComponent } from './demotemplate.component';

const routes: Routes = [
  {
    path: '',
    component: DemotemplateComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemotemplateRoutingModule { }
