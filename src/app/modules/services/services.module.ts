import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageOldMachinePriceComponent } from './manage-old-machine-price/manage-old-machine-price.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from "../../shared/shared.module";
import {PrimeNGModule} from "../../shared/primeng/primeng.module";
import {NgSelectModule} from "@ng-select/ng-select";
import {ServicesRoutingModule} from "./services-routing.module";
import { ManageRevenueExpenditureComponent } from './manage-revenue-expenditure/manage-revenue-expenditure.component';
import { ManageExchangeReturnComponent } from './manage-exchange-return/manage-exchange-return.component';
import { AssessOldProductComponent } from './assess-old-product/assess-old-product.component';
import { AssessOldProductFilterComponent } from './assess-old-product/assess-old-product-filter/assess-old-product-filter.component';
import { AssessOldProductSummaryComponent } from './assess-old-product/assess-old-product-summary/assess-old-product-summary.component';
import { SamsungRandomWheelComponent } from './samsung-random-wheel/samsung-random-wheel.component';
import { ReturnRequestComponent } from './return-request/return-request.component';
import { PublishedCouponManagementComponent } from './published-coupon-management/published-coupon-management.component';
import { CreateBillDifferentMonthComponent } from './create-bill-different-month/create-bill-different-month.component';
import { BtnGroupComponent } from './create-bill-different-month/btn-group/btn-group.component';
import { CreateVouchersCareComponent } from './create-vouchers-care/create-vouchers-care.component';
import { CareFilterComponent } from './create-vouchers-care/component/care-filter/care-filter.component';
import { CareFooterComponent } from './create-vouchers-care/component/care-footer/care-footer.component';
import { PaymentVouchersComponent } from './payment-vouchers/payment-vouchers.component';
import { PaymentVouchersDetailComponent } from './payment-vouchers/component/payment-vouchers-detail/payment-vouchers-detail.component';
import { PaymentVouchersEmployeeComponent } from './payment-vouchers/component/payment-vouchers-employee/payment-vouchers-employee.component';
import { PaymentVouchersPayComponent } from './payment-vouchers/component/payment-vouchers-pay/payment-vouchers-pay.component';
import { ERetailInvoiceComponent } from './e-retail-invoice/e-retail-invoice.component';
import { PaymentReturnedToCompanyComponent } from './payment-returned-to-company/payment-returned-to-company.component';



@NgModule({
  declarations: [
    ManageOldMachinePriceComponent,
    ManageExchangeReturnComponent,
    AssessOldProductComponent,
    AssessOldProductFilterComponent,
    AssessOldProductSummaryComponent,
    SamsungRandomWheelComponent,
    PublishedCouponManagementComponent,
    ReturnRequestComponent,
    PublishedCouponManagementComponent,
    CreateVouchersCareComponent,
    CareFilterComponent,
    CareFooterComponent,
    PaymentVouchersComponent,
    PaymentVouchersDetailComponent,
    PaymentVouchersEmployeeComponent,
    PaymentVouchersPayComponent,
    PublishedCouponManagementComponent,
    ERetailInvoiceComponent,
	  ManageRevenueExpenditureComponent,
	  CreateBillDifferentMonthComponent,
	  BtnGroupComponent,
	  PaymentReturnedToCompanyComponent
  ],
  imports: [
    CommonModule,
    ServicesRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    PrimeNGModule,
    NgSelectModule
  ]
})
export class ServicesModule { }
