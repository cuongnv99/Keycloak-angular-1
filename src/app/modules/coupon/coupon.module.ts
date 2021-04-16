import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckCouponComponent } from './check-coupon/check-coupon.component';
import {CouponRoutingModule} from "./coupon-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from "../../shared/shared.module";
import {PrimeNGModule} from "../../shared/primeng/primeng.module";
import {NgSelectModule} from "@ng-select/ng-select";



@NgModule({
  declarations: [CheckCouponComponent],
  imports: [
    CommonModule,
    CouponRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    PrimeNGModule,
    NgSelectModule
  ]
})
export class CouponModule { }
