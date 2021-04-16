import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalesRoutingModule } from './sales-routing.module';
import { SaleInMarketComponent } from './sale-in-market/sale-in-market.component';
import { SummarySectionSaleMarketComponent } from './sale-in-market/components/summary-section-sale-market/summary-section-sale-market.component';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputMaskModule } from 'primeng/inputmask';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { InputNumberModule } from 'primeng/inputnumber';
import { DialogModule } from 'primeng/dialog';
import { DialogBarcodeComponent } from './sale-in-market/dialog/dialog-barcode/dialog-barcode.component';
import { DialogGetPromotinalComponent } from './sale-in-market/dialog/dialog-get-promotional/dialog-get-promotional.component';
import { DialogEmployeeComponent } from './sale-in-market/dialog/dialog-employee/dialog-employee.component';
import { SharedModule } from '../../shared/shared.module';
import { FilterSaleMarketComponent } from './sale-in-market/components/filter-sale-market/filter-sale-market.component';
import { PrimeNGModule } from '../../shared/primeng/primeng.module';
import { XuatBanTraGopKhongMatLaiComponent } from './xuat-ban-tra-gop-khong-mat-lai/xuat-ban-tra-gop-khong-mat-lai.component';
import { DonHangComponent } from './xuat-ban-tra-gop-khong-mat-lai/components/don-hang/don-hang.component';
import { KhachHangComponent } from './xuat-ban-tra-gop-khong-mat-lai/components/khach-hang/khach-hang.component';
import { SectionXuatBanTraGopKhongMatLaiComponent } from './xuat-ban-tra-gop-khong-mat-lai/components/section-xuat-ban-tra-gop-khong-mat-lai/section-xuat-ban-tra-gop-khong-mat-lai.component';
import { FormFilterComponent } from './quan-ly-yeu-cau-xuat-hang/components/form-filter/form-filter.component';
import { QuanLyYeuCauXuatHangComponent } from './quan-ly-yeu-cau-xuat-hang/quan-ly-yeu-cau-xuat-hang.component';
import { FormFooterComponent } from './quan-ly-yeu-cau-xuat-hang/components/form-footer/form-footer.component';
import { CreateReservationRequestComponent } from './create-reservation-request/create-reservation-request.component';
import { CustomersComponent } from './create-reservation-request/customers/customers.component';
import { GeneralInformationComponent } from './create-reservation-request/general-information/general-information.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { CtPreOrderManagementComponent } from './ct-pre-order-management/ct-pre-order-management.component';
import { CtPreOrderFilterComponent } from './ct-pre-order-management/ct-pre-order-filter/ct-pre-order-filter.component';
import { PreOrderManagementComponent } from './pre-order-management/pre-order-management.component';
import { ExchangeSearchingComponent } from './exchange-searching/exchange-searching.component';
import { ExchangeSearchingFilterComponent } from './exchange-searching/exchange-searching-filter/exchange-searching-filter.component';
import { CountBillComponent } from './create-reservation-request/general-information/count-bill/count-bill.component';
import {PurchaseHistoryComponent} from "./xuat-ban-tra-gop-khong-mat-lai/components/purchase-history/purchase-history.component";
import {DetailSaleComponent} from "./sale-in-market/dialog/detail-sale/detail-sale.component";
import {PaymentDetailComponent} from "./sale-in-market/dialog/payment-detail/payment-detail.component";
import {DialogGetPromotinalComboComponent} from "./sale-in-market/dialog/dialog-get-promotional-combo/dialog-get-promotional-combo.component";
import {FilterFormComponentComponent} from "./pre-order-management/filter-form-component/filter-form-component.component";
import { DialogGetPromotinalSecondComponent } from './sale-in-market/dialog/dialog-get-promotional-second/dialog-get-promotional-second.component';
@NgModule({
  declarations: [
    //Sale in market
    SaleInMarketComponent,
    SummarySectionSaleMarketComponent,
    FilterSaleMarketComponent,
    DialogBarcodeComponent,
    DialogGetPromotinalComponent,
    DialogEmployeeComponent,
    DetailSaleComponent,
    PaymentDetailComponent,
    DialogGetPromotinalComboComponent,
    //Xuất bán trả góp không mất lãi
    XuatBanTraGopKhongMatLaiComponent,
    DonHangComponent,
    KhachHangComponent,
    SectionXuatBanTraGopKhongMatLaiComponent,
    FormFilterComponent,
    FormFooterComponent,
    QuanLyYeuCauXuatHangComponent,
    PurchaseHistoryComponent,
    PreOrderManagementComponent,
    FilterFormComponentComponent,
    CtPreOrderManagementComponent,
    CtPreOrderFilterComponent,
    ExchangeSearchingComponent,
    ExchangeSearchingFilterComponent,
    CreateReservationRequestComponent,
    CustomersComponent,
    GeneralInformationComponent,
    CountBillComponent,
    DialogGetPromotinalSecondComponent
  ],
  imports: [
    CommonModule,
    SalesRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    PrimeNGModule,
    NgSelectModule
  ]
})
export class SalesModule { }
