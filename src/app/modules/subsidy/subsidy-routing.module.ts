import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SubsidyFormComponent} from "./subsidy-form/subsidy-form.component";


const routes: Routes = [
  {
    path: 'subsidy-form',
    component: SubsidyFormComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubsidyRoutingModule { }
