import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private appService: ApiService) { }

  getSearchEmployees(): Observable<any> {
    return this.appService.get('assets/demo/sales/employee.json');
  }

  getTablesData(): Observable<any> {
    return this.appService.get('assets/demo/sales/table.json');
  }

  getTablesDataXuatBan(): Observable<any> {
    return this.appService.get('assets/demo/sales/tableXBanKMatLai.json');
  }

  getTableData() {
    return this.appService.get('assets/demo/sales/bangYeuCauXuatBan.json');
  }

  getPreOrders() {
    return this.appService.get('assets/demo/sales/preOrderManagement.json');
  }

  getCtPreOrder() {
    return this.appService.get('assets/demo/sales/ctPreOrder.json');
  }

  getExchangeSearching() {
    return this.appService.get('assets/demo/sales/exchange-search.json');
  }

  getManageOldMachinePrice() {
    return this.appService.get('assets/demo/sales/quanLyDinhGiaMayCu.json');
  }

  getAssessProducts() {
    return this.appService.get('assets/demo/sales/assess-product.json');
  }

  getTableBarcodeData() {
    return this.appService.get('assets/demo/sales/barcode.json');
  }

  getTableEmployeeSearchData() {
    return this.appService.get('assets/demo/sales/employeeSearchModal.json');
  }

  getTablePaymentData() {
    return this.appService.get('assets/demo/sales/payment.json');
  }

  getTableDetailSaleData() {
    return this.appService.get('assets/demo/sales/detailSale.json');
  }

  getTableUserData() {
    return this.appService.get('assets/demo/sales/userSearchData.json');
  }

  getTablePromotionalData() {
    return this.appService.get('assets/demo/sales/promotional.json');
  }

  getTablePhiThuData() {
    return this.appService.get('assets/demo/sales/phiThu.json');
  }

  getTablePromotional1() {
    return this.appService.get('assets/demo/sales/promotional1.json');
  }

  getTablePromotional2() {
    return this.appService.get('assets/demo/sales/promotional2.json');
  }
  getTablePromotional3() {
    return this.appService.get('assets/demo/sales/promotional3.json');
  }

  getManageRevenueAndExpenditure() {
    return this.appService.get('assets/demo/sales/quanLyThuChi.json');
  }

  getTableDataVouchersCare() {
    return this.appService.get('assets/demo/sales/vouchersCare.json');
  }

  getTableDataPaymentVouchers() {
    return this.appService.get('assets/demo/sales/paymentCouchers.json');
  }

  getCouponInfo() {
    return this.appService.get('assets/demo/sales/coupon-management.json')
  }

  getRetailInvoice() {
    return this.appService.get('assets/demo/sales/e-retail-invoice.json');
  }

  getCustomerListReport() {
    return this.appService.get('assets/demo/sales/customer-list-report.json');
  }

  getRevenueReport() {
    return this.appService.get('assets/demo/sales/revenue-report.json');
  }
}
