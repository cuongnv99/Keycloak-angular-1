import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ComponentsModule} from "./components/components.module";
import {UtilsModule} from "./utils/utils.module";
import {PipesModule} from "./pipes/pipes.module";
import {DirectivesModule} from "./directives/directives.module";
import {EnumsModule} from "./enums/enums.module";
import {PrimeNGModule} from "./primeng/primeng.module";
import {MaterialModule} from './material/material.module';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedRoutingModule,
    RouterModule,
    ComponentsModule,
    UtilsModule,
    PipesModule,
    DirectivesModule,
    EnumsModule,
    PrimeNGModule,
    MaterialModule,
    NgSelectModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    ComponentsModule,
    UtilsModule,
    PipesModule,
    DirectivesModule,
    EnumsModule,
    PrimeNGModule,
    MaterialModule,
    NgSelectModule
  ]
})
export class SharedModule { }
