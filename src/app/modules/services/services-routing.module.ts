import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ManageOldMachinePriceComponent} from "./manage-old-machine-price/manage-old-machine-price.component";
import {ManageRevenueExpenditureComponent} from "./manage-revenue-expenditure/manage-revenue-expenditure.component";
import {PaymentReturnedToCompanyComponent} from "./payment-returned-to-company/payment-returned-to-company.component";

const routes: Routes = [
  {
    path: 'manage-old-machine-price',
    component: ManageOldMachinePriceComponent
  },
  {
    path: 'manage-revenue-expenditure',
    component: ManageRevenueExpenditureComponent
  },
  {
    path: 'payment-returned-to-company',
    component: PaymentReturnedToCompanyComponent
  }
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesRoutingModule {}
