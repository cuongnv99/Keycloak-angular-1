import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vnpay-report',
  templateUrl: './vnpay-report.component.html',
  styleUrls: ['./vnpay-report.component.scss']
})
export class VnpayReportComponent implements OnInit {

  openEmployeeSearchModal: boolean;
  openProductSearchModal: boolean;
  reportTypes = [];
  items: any[];
  home: any;

  constructor() { }

  ngOnInit(): void {
    this.reportTypes = [
      {code: '1', name: 'Báo cáo VNPay'},
      {code: '2', name: 'Báo cáo doanh thu VNPay'}
    ]
    this.items = [
      { label: 'Nghiệp vụ bán hàng' },
      { label: 'report' },
      { label: 'Xuất theo khách hàng' },
    ];
    this.home = { icon: 'pi pi-home' };
  }


}
