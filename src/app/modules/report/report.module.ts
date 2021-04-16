import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportRoutingModule } from './report-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { PrimeNGModule } from '../../shared/primeng/primeng.module';
import { CustomerListReportComponent } from './customer-list-report/customer-list-report.component';
import { ExportByCustomerComponent } from './export-by-customer/export-by-customer.component';
import { SaleReportComponent } from './sale-report/sale-report.component';
import { EmployeeReportComponent } from './employee-report/employee-report.component';
import { ReturnProductReportComponent } from './return-product-report/return-product-report.component';
import { VnpayReportComponent } from './vnpay-report/vnpay-report.component';
import { ReportSalesByProductComponent } from './report-sales-by-product/report-sales-by-product.component';
import { InventoryAccordingToStockComponent } from './inventory-according-to-stock/inventory-according-to-stock.component';
import { DailyCashComponent } from './daily-cash/daily-cash.component';
import { RevenueReportComponent } from './revenue-report/revenue-report.component';


@NgModule({
  declarations: [
    CustomerListReportComponent,
    ExportByCustomerComponent,
    SaleReportComponent,
    EmployeeReportComponent,
    ReturnProductReportComponent,
    VnpayReportComponent,
	ReportSalesByProductComponent,
	InventoryAccordingToStockComponent,
	DailyCashComponent,
    VnpayReportComponent,
    RevenueReportComponent
  ],
  imports: [
    CommonModule,
    ReportRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    PrimeNGModule,
  ]
})
export class ReportModule { }
