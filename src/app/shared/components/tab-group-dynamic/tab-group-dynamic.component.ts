import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BranchSelectionComponent } from '../branch-selection/branch-selection.component';
import { LocationSelectionComponent } from '../location-selection/location-selection.component';
import { FormControl } from '@angular/forms';
import { DynamicTabService } from '../../../services/dynamic-tab.sevice';
import { SaleInMarketComponent } from '../../../modules/sales/sale-in-market/sale-in-market.component';
import { XuatBanTraGopKhongMatLaiComponent } from '../../../modules/sales/xuat-ban-tra-gop-khong-mat-lai/xuat-ban-tra-gop-khong-mat-lai.component';
import { QuanLyYeuCauXuatHangComponent } from '../../../modules/sales/quan-ly-yeu-cau-xuat-hang/quan-ly-yeu-cau-xuat-hang.component';
import { PreOrderManagementComponent } from '../../../modules/sales/pre-order-management/pre-order-management.component';
import { CtPreOrderManagementComponent } from '../../../modules/sales/ct-pre-order-management/ct-pre-order-management.component';
import { ExchangeSearchingComponent } from '../../../modules/sales/exchange-searching/exchange-searching.component';
import {CreateReservationRequestComponent} from "../../../modules/sales/create-reservation-request/create-reservation-request.component";
import {SubsidyFormComponent} from "../../../modules/subsidy/subsidy-form/subsidy-form.component";
import {OnlinePayingComponent} from "../../../modules/epay/online-paying/online-paying.component";
import {ManageOnlinePayingComponent} from "../../../modules/epay/manage-online-paying/manage-online-paying.component";
import {ManageOldMachinePriceComponent} from "../../../modules/services/manage-old-machine-price/manage-old-machine-price.component";
import {ManageRevenueExpenditureComponent} from "../../../modules/services/manage-revenue-expenditure/manage-revenue-expenditure.component";
import {ManageExchangeReturnComponent} from "../../../modules/services/manage-exchange-return/manage-exchange-return.component";
import { AssessOldProductComponent } from '../../../modules/services/assess-old-product/assess-old-product.component';
import { SamsungRandomWheelComponent } from '../../../modules/services/samsung-random-wheel/samsung-random-wheel.component';
import { ReturnRequestComponent } from '../../../modules/services/return-request/return-request.component';
import { PublishedCouponManagementComponent } from '../../../modules/services/published-coupon-management/published-coupon-management.component';
import { CreateVouchersCareComponent } from '../../../modules/services/create-vouchers-care/create-vouchers-care.component';
import { PaymentVouchersComponent } from '../../../modules/services/payment-vouchers/payment-vouchers.component';
import { ERetailInvoiceComponent } from '../../../modules/services/e-retail-invoice/e-retail-invoice.component';
import {CreateBillDifferentMonthComponent} from "../../../modules/services/create-bill-different-month/create-bill-different-month.component";
import {CheckCouponComponent} from "../../../modules/coupon/check-coupon/check-coupon.component";
import {PaymentReturnedToCompanyComponent} from "../../../modules/services/payment-returned-to-company/payment-returned-to-company.component";
import { CustomerListReportComponent } from '../../../modules/report/customer-list-report/customer-list-report.component';
import { ExportByCustomerComponent } from '../../../modules/report/export-by-customer/export-by-customer.component';
import { SaleReportComponent } from '../../../modules/report/sale-report/sale-report.component';
import { EmployeeReportComponent } from '../../../modules/report/employee-report/employee-report.component';
import { ReturnProductReportComponent } from '../../../modules/report/return-product-report/return-product-report.component';
import { VnpayReportComponent } from '../../../modules/report/vnpay-report/vnpay-report.component';
import {ReportSalesByProductComponent} from "../../../modules/report/report-sales-by-product/report-sales-by-product.component";
import {DailyCashComponent} from "../../../modules/report/daily-cash/daily-cash.component";
import {InventoryAccordingToStockComponent} from "../../../modules/report/inventory-according-to-stock/inventory-according-to-stock.component";
import { RevenueReportComponent } from '../../../modules/report/revenue-report/revenue-report.component';
import {CustomerInfoComponent} from "../../../modules/crm/customer-info/customer-info.component";
import { ListMenuUserComponent } from '../../../modules/erp-admin/list-menu-user/list-menu-user.component';

@Component({
  selector: 'app-tab-group-dynamic',
  templateUrl: './tab-group-dynamic.component.html',
  styleUrls: ['./tab-group-dynamic.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TabGroupDynamicComponent implements OnInit {

  constructor(
    private dynamicTabService: DynamicTabService
  ) { }

  ngOnInit(): void {
    this.dynamicTabService.getValueMenuCode().subscribe((menuCode: number) => {
      if (menuCode === 138) {
        const _menuName = 'Bán hàng tại siêu thị';
        this.dynamicTabService.setValueMenuName('BÁN HÀNG');
        this.addTab(_menuName, SaleInMarketComponent)
      } else if (menuCode === 1047) {
        const _menuName = 'Bán hàng trả góp';
        this.dynamicTabService.setValueMenuName('BÁN HÀNG');
        this.addTab(_menuName, XuatBanTraGopKhongMatLaiComponent)
      } else if (menuCode === 113) {
        const _menuName = 'Quản lý yêu cầu bán hàng';
        this.dynamicTabService.setValueMenuName('BÁN HÀNG');
        this.addTab(_menuName, QuanLyYeuCauXuatHangComponent)
      } else if (menuCode == 1547) {
        this.addTab('Quản lý yêu cầu đặt trước', PreOrderManagementComponent)
      } else if (menuCode === 1225) {
        this.addTab('Quản lý chương trình đặt trước', CtPreOrderManagementComponent)
      } else if (menuCode === 1571) {
        this.addTab('Tra cứu lập bù giao dịch', ExchangeSearchingComponent)
      } else if (menuCode === 1546) {
        const _menuName = 'Tạo yêu cầu đặt trước';
        this.dynamicTabService.setValueMenuName('BÁN HÀNG');
        this.addTab(_menuName, CreateReservationRequestComponent)
      } else if (menuCode === 1169) {
        const _menuName = 'Subsidy - Siêu thị';
        this.dynamicTabService.setValueMenuName('BÁN HÀNG');
        this.addTab(_menuName, SubsidyFormComponent)
      } else if (menuCode === 1505) {
        const _menuName = 'Thanh toán điện tử';
        this.dynamicTabService.setValueMenuName('BÁN HÀNG');
        this.addTab(_menuName, OnlinePayingComponent)
      } else if (menuCode === 1568) {
        const _menuName = 'Quản lý giao dịch thanh toán điện tử';
        this.dynamicTabService.setValueMenuName('BÁN HÀNG');
        this.addTab(_menuName, ManageOnlinePayingComponent)
      } else if (menuCode === 184) {
        const _menuName = 'Quản lý định giá máy cũ';
        this.dynamicTabService.setValueMenuName(_menuName);
        this.addTab(_menuName, ManageOldMachinePriceComponent)
      } else if (menuCode === 598) {
        const _menuName = 'Quản lý yêu cầu nhập đổi/trả hàng';
        this.dynamicTabService.setValueMenuName(_menuName);
        this.addTab(_menuName, ManageExchangeReturnComponent)
      } else if (menuCode == 183) {
        this.addTab('Định giá máy cũ', AssessOldProductComponent)
      } else if (menuCode == 785) {
        this.addTab('Lật ô Samsung', SamsungRandomWheelComponent)
      } else if (menuCode === 597) {
        this.addTab('Yêu cầu đổi trả', ReturnRequestComponent)
      } else if (menuCode == 1026) {
        this.addTab('Quản lý thông tin coupon đã phát hành', PublishedCouponManagementComponent)
      }else if (menuCode === 1006) {
        this.addTab('Tạo chứng từ huỷ Care+', CreateVouchersCareComponent)
      }else if (menuCode === 208) {
        this.addTab('Phiếu chi', PaymentVouchersComponent)
      } else if (menuCode == 1574) {
        this.addTab('Tạo hóa đơn bán hàng dịch vụ HĐ điện tử', ERetailInvoiceComponent)
      } else if (menuCode === 781) {
        const _menuName = 'Kiểm tra thông tin coupon';
        this.dynamicTabService.setValueMenuName(_menuName);
        this.addTab(_menuName, CheckCouponComponent)
      } else if (menuCode === 1577) {
        this.addTab('Tạo hóa đơn bán hàng dịch vụ HĐ điện tử khác tháng', CreateBillDifferentMonthComponent)
      } else if (menuCode === 189) {
        const _menuName = 'Quản lý thu chi';
        this.dynamicTabService.setValueMenuName(_menuName);
        this.addTab(_menuName, ManageRevenueExpenditureComponent)
      } else if (menuCode === 1436) {
        this.addTab('Chi tiền hàng nộp về công ty', PaymentReturnedToCompanyComponent)
      } else if (menuCode == 191) {
        this.addTab('Báo cáo khách hàng', ExportByCustomerComponent)
      } else if (menuCode == 192) {
        this.addTab('Báo cáo bán hàng', SaleReportComponent)
      } else if (menuCode == 193) {
        this.addTab('Báo cáo nhân viên', EmployeeReportComponent)
      } else if (menuCode == 194) {
        this.addTab('Báo cáo đổi trả hàng', ReturnProductReportComponent)
      } else if (menuCode == 195) {
        this.addTab('Báo cáo VNPay', VnpayReportComponent)
      } else if (menuCode === 703) {
        this.addTab('Báo cáo doanh thu theo sản phẩm', ReportSalesByProductComponent)
      } else if (menuCode === 177) {
        this.addTab('Tồn kho theo kho', InventoryAccordingToStockComponent)
      } else if (menuCode === 196) {
        this.addTab('Thu chi hàng ngày', DailyCashComponent)
      } else if (menuCode == 1247) {
        this.addTab('Báo cáo doanh thu theo hình thức thanh toán', RevenueReportComponent);
      } else if (menuCode == 307) {
        this.addTab('Thông tin khách hàng CRM', CustomerInfoComponent);
      } 
    })
  }

  tabs = [];
  selected = new FormControl(0);

  addTab(tabName: string, selector: any) {

    let tab = { tabName: tabName, selector: selector };
    this.tabs.push(tab);
    this.selected.setValue(this.tabs.length - 1);

  }

  removeTab(index: number) {
    this.tabs.splice(index, 1);
  }

}
