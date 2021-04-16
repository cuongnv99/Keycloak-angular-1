import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EmployeeSelectionComponent} from './employee-selection/employee-selection.component';
import {BranchSelectionComponent} from './branch-selection/branch-selection.component';
import {LocationSelectionComponent} from './location-selection/location-selection.component';
import {NgSelectModule} from '@ng-select/ng-select';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DialogModule} from 'primeng/dialog';
import {TableModule} from 'primeng/table';
import {CheckboxModule} from 'primeng/checkbox';
import {PaginatorModule} from 'primeng/paginator';
import {EmployeeSearchModalComponent} from './employee-search-modal/employee-search-modal.component';
import {TabGroupDynamicComponent} from './tab-group-dynamic/tab-group-dynamic.component';
import {MaterialModule} from '../material/material.module';
import {TableDynamicComponent} from './table-dynamic/table-dynamic.component';
import {CustomerInfoModalComponent} from './customer-info-modal/customer-info-modal.component';
import {FieldsetModule,} from 'primeng/fieldset';
import {TabViewModule} from 'primeng/tabview';
import {RadioButtonModule} from 'primeng/radiobutton';
import {CalendarModule} from 'primeng/calendar';
import {SaleInMarketComponent} from '../../modules/sales/sale-in-market/sale-in-market.component';
import {XuatBanTraGopKhongMatLaiComponent} from '../../modules/sales/xuat-ban-tra-gop-khong-mat-lai/xuat-ban-tra-gop-khong-mat-lai.component';
import {TieredMenuModule} from 'primeng/tieredmenu';
import {CustomerInfoViewModalComponent} from './customer-info-view-modal/customer-info-view-modal.component';
import {BarcodeModalComponent} from './barcode-modal/barcode-modal.component';
import {QuanLyYeuCauXuatHangComponent} from '../../modules/sales/quan-ly-yeu-cau-xuat-hang/quan-ly-yeu-cau-xuat-hang.component';
import {NotifyModalComponent} from './notify-modal/notify-modal.component';
import {PreOrderManagementComponent} from '../../modules/sales/pre-order-management/pre-order-management.component';
import {MultiSelectComponent} from './multi-select/multi-select.component';
import {UserSearchModalComponent} from './user-search-modal/user-search-modal.component';
import {UserSelectionComponent} from './user-selection/user-selection.component';
import {PhiThuModalComponent} from './phi-thu-modal/phi-thu-modal.component';
import {CtPreOrderManagementComponent} from '../../modules/sales/ct-pre-order-management/ct-pre-order-management.component';
import {ModelSearchModalComponent} from './model-search-modal/model-search-modal.component';
import {ProductSearchModalComponent} from './product-search-modal/product-search-modal.component';
import {ExchangeSearchingComponent} from '../../modules/sales/exchange-searching/exchange-searching.component';
import {CreateReservationRequestComponent} from "../../modules/sales/create-reservation-request/create-reservation-request.component";
import {OnlinePayingComponent} from "../../modules/epay/online-paying/online-paying.component";
import {SubsidyFormComponent} from "../../modules/subsidy/subsidy-form/subsidy-form.component";
import {ManageOnlinePayingComponent} from "../../modules/epay/manage-online-paying/manage-online-paying.component";
import {ManageOldMachinePriceComponent} from "../../modules/services/manage-old-machine-price/manage-old-machine-price.component";
import {AssessOldProductComponent} from '../../modules/services/assess-old-product/assess-old-product.component';
import {ReturnRequestComponent} from '../../modules/services/return-request/return-request.component';
import {CheckCouponComponent} from "../../modules/coupon/check-coupon/check-coupon.component";
import {InputNumberModule} from 'primeng/inputnumber';
import {ManageRevenueExpenditureComponent} from "../../modules/services/manage-revenue-expenditure/manage-revenue-expenditure.component";
import {ManageExchangeReturnComponent} from "../../modules/services/manage-exchange-return/manage-exchange-return.component";
import {SamsungRandomWheelComponent} from '../../modules/services/samsung-random-wheel/samsung-random-wheel.component';
import {PublishedCouponManagementComponent} from '../../modules/services/published-coupon-management/published-coupon-management.component';
import {CreateVouchersCareComponent} from '../../modules/services/create-vouchers-care/create-vouchers-care.component';
import {PaymentVouchersComponent} from '../../modules/services/payment-vouchers/payment-vouchers.component';
import {ERetailInvoiceComponent} from '../../modules/services/e-retail-invoice/e-retail-invoice.component';
import {CreateBillDifferentMonthComponent} from "../../modules/services/create-bill-different-month/create-bill-different-month.component";
import {PaymentReturnedToCompanyComponent} from "../../modules/services/payment-returned-to-company/payment-returned-to-company.component";
import {CustomerListReportComponent} from '../../modules/report/customer-list-report/customer-list-report.component';
import {ExportByCustomerComponent} from '../../modules/report/export-by-customer/export-by-customer.component';
import {EmployeeReportComponent} from '../../modules/report/employee-report/employee-report.component';
import {ReturnProductReportComponent} from '../../modules/report/return-product-report/return-product-report.component';
import {SaleReportComponent} from '../../modules/report/sale-report/sale-report.component';
import {VnpayReportComponent} from '../../modules/report/vnpay-report/vnpay-report.component';
import {ReportSalesByProductComponent} from "../../modules/report/report-sales-by-product/report-sales-by-product.component";
import {DailyCashComponent} from "../../modules/report/daily-cash/daily-cash.component";
import {InventoryAccordingToStockComponent} from "../../modules/report/inventory-according-to-stock/inventory-according-to-stock.component";
import {RevenueReportComponent} from '../../modules/report/revenue-report/revenue-report.component';
import {CustomerInfoComponent} from "../../modules/crm/customer-info/customer-info.component";

const SHARED_COMPONENTS = [
  EmployeeSelectionComponent,
  BranchSelectionComponent,
  LocationSelectionComponent,
  EmployeeSearchModalComponent,
  TabGroupDynamicComponent,
  TableDynamicComponent,
  CustomerInfoModalComponent,
  CustomerInfoViewModalComponent,
  BarcodeModalComponent,
  NotifyModalComponent,
  UserSearchModalComponent,
  UserSelectionComponent,
  PhiThuModalComponent,
  NotifyModalComponent,
  MultiSelectComponent,
  PhiThuModalComponent,
  NotifyModalComponent,
  ModelSearchModalComponent,
  ProductSearchModalComponent
]

@NgModule({
  declarations: [SHARED_COMPONENTS],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    InputTextModule,
    ButtonModule,
    DialogModule,
    TableModule,
    CheckboxModule,
    PaginatorModule,
    MaterialModule,
    FieldsetModule,
    TabViewModule,
    RadioButtonModule,
    CalendarModule,
    TieredMenuModule,
    NgSelectModule,
    InputNumberModule
  ],
  exports: [
    SHARED_COMPONENTS
  ],
  entryComponents: [
    BranchSelectionComponent,
    LocationSelectionComponent,
    SaleInMarketComponent,
    XuatBanTraGopKhongMatLaiComponent,
    QuanLyYeuCauXuatHangComponent,
    PreOrderManagementComponent,
    CtPreOrderManagementComponent,
    CreateReservationRequestComponent,
    SubsidyFormComponent,
    OnlinePayingComponent,
    ManageOnlinePayingComponent,
    ExchangeSearchingComponent,
    ManageOldMachinePriceComponent,
    ManageExchangeReturnComponent,
    AssessOldProductComponent,
    SamsungRandomWheelComponent,
    ReturnRequestComponent,
    PublishedCouponManagementComponent,
    CreateVouchersCareComponent,
    PaymentVouchersComponent,
    CheckCouponComponent,
    ManageRevenueExpenditureComponent,
    CreateBillDifferentMonthComponent,
    PaymentReturnedToCompanyComponent,
    PublishedCouponManagementComponent,
    ERetailInvoiceComponent,
    CustomerListReportComponent,
    ExportByCustomerComponent,
    EmployeeReportComponent,
    ReturnProductReportComponent,
    SaleReportComponent,
    VnpayReportComponent,
    ReportSalesByProductComponent,
    DailyCashComponent,
    InventoryAccordingToStockComponent,
    VnpayReportComponent,
    RevenueReportComponent,
    CustomerInfoComponent
  ]
})
export class ComponentsModule {
}
