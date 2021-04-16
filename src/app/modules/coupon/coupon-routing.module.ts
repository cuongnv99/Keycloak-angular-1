import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {CheckCouponComponent} from "./check-coupon/check-coupon.component";


const routes: Routes = [
  {
    path: 'check-coupon',
    component: CheckCouponComponent
  }]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CouponRoutingModule {
}
