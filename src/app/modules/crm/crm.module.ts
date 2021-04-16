import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerInfoComponent } from './customer-info/customer-info.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from "../../shared/shared.module";
import {PrimeNGModule} from "../../shared/primeng/primeng.module";
import {NgSelectModule} from "@ng-select/ng-select";
import {FieldsetModule} from "primeng/fieldset";
import {CrmRoutingModule} from "./crm-routing.module";
import { ListCustomerComponent } from './customer-info/list-customer/list-customer.component';
import { InfoDetailsComponent } from './customer-info/info-details/info-details.component';
import { GeneralInformationComponent } from './customer-info/info-details/general-information/general-information.component';
import {FileUploadModule} from "primeng/fileupload";
import { BtnGroupComponent } from './customer-info/btn-group/btn-group.component';
import { FinanceComponent } from './customer-info/info-details/finance/finance.component';



@NgModule({
  declarations: [CustomerInfoComponent, ListCustomerComponent, InfoDetailsComponent, GeneralInformationComponent, BtnGroupComponent, FinanceComponent],
    imports: [
        CommonModule,
        CrmRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        SharedModule,
        PrimeNGModule,
        NgSelectModule,
        FieldsetModule,
        FileUploadModule
    ]
})
export class CrmModule { }
