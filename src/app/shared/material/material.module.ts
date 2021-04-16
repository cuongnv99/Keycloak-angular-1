import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatTabsModule,
    MatCheckboxModule,
    MatIconModule,
    MatFormFieldModule,
  ],
  exports: [
    MatTabsModule,
    MatCheckboxModule,
    MatIconModule,
    MatFormFieldModule,
  ]
})
export class MaterialModule { }
