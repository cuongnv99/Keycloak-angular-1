import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubsidyFormComponent } from './subsidy-form/subsidy-form.component';
import {SubsidyRoutingModule} from "./subsidy-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from "../../shared/shared.module";
import {PrimeNGModule} from "../../shared/primeng/primeng.module";
import {NgSelectModule} from "@ng-select/ng-select";

@NgModule({
  declarations: [
    SubsidyFormComponent
  ],
  imports: [
    CommonModule,
    SubsidyRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    PrimeNGModule,
    NgSelectModule
  ]
})
export class SubsidyModule { }
