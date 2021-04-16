import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnlinePayingComponent } from './online-paying/online-paying.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from "../../shared/shared.module";
import {PrimeNGModule} from "../../shared/primeng/primeng.module";
import {NgSelectModule} from "@ng-select/ng-select";
import {EpayRoutingModule} from "./epay-routing.module";
import { BuyCardCodeComponent } from './online-paying/buy-card-code/buy-card-code.component';
import {FieldsetModule} from 'primeng/fieldset';
import { TelecomPaymentComponent } from './online-paying/telecom-payment/telecom-payment.component';
import { ManageOnlinePayingComponent } from './manage-online-paying/manage-online-paying.component';
import { FormSearchComponent } from './manage-online-paying/form-search/form-search.component';
import { CountingComponent } from './manage-online-paying/counting/counting.component';



@NgModule({
  declarations: [
    OnlinePayingComponent,
    BuyCardCodeComponent,
    TelecomPaymentComponent,
    ManageOnlinePayingComponent,
    FormSearchComponent,
    CountingComponent
  ],
  imports: [
    CommonModule,
    EpayRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    PrimeNGModule,
    NgSelectModule,
    FieldsetModule
  ]
})
export class EpayModule { }
