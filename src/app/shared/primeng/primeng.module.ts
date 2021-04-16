import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { MultiSelectModule } from 'primeng/multiselect';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { DialogModule } from 'primeng/dialog';
import { TooltipModule } from 'primeng/tooltip';
import { TabMenuModule } from 'primeng/tabmenu';
import { PanelMenuModule } from 'primeng/panelmenu';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputMaskModule } from 'primeng/inputmask';
import { TableModule } from 'primeng/table';
import { InputNumberModule } from 'primeng/inputnumber';
import {TabViewModule} from 'primeng/tabview';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { FieldsetModule } from 'primeng/fieldset';
import {InputSwitchModule} from 'primeng/inputswitch';
import {PickListModule} from 'primeng/picklist';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule,
    InputTextModule,
    CalendarModule,
    MultiSelectModule,
    CheckboxModule,
    RadioButtonModule,
    DialogModule,
    TooltipModule,
    TabMenuModule,
    PanelMenuModule,
    
    
  ],
  exports: [
    ButtonModule,
    InputTextModule,
    CalendarModule,
    MultiSelectModule,
    CheckboxModule,
    RadioButtonModule,
    DialogModule,
    TooltipModule,
    TabMenuModule,
    DropdownModule,
    InputTextareaModule,
    InputMaskModule,
    TableModule,
    InputNumberModule,
    TabViewModule,
    BreadcrumbModule,
    FieldsetModule,
    InputSwitchModule,
    PickListModule
  ]
})


export class PrimeNGModule { }

