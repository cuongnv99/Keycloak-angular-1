import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sale-report',
  templateUrl: './sale-report.component.html',
  styleUrls: ['./sale-report.component.scss']
})
export class SaleReportComponent implements OnInit {

  openEmployeeSearchModal: boolean;
  openProductSearchModal: boolean;
  reportTypes = [];
  items: any[];
  home: any;

  constructor() { }

  ngOnInit(): void {
    this.reportTypes = [
      {code: '1', name: 'Xuất theo loại yêu cầu xuất'},
      {code: '2', name: 'Báo cáo chi tiết hàng bán'},
      {code: '2', name: 'Số lượng bán chi tiết theo ngày'},
      {code: '2', name: 'Báo cáo chi tiết hàng xuất kho'},
      {code: '2', name: 'Chênh lệch giá bán'},
      {code: '2', name: 'Doanh số bán hàng theo kho bán'},
      {code: '2', name: 'Tổng hợp bán hàng'},
      {code: '2', name: 'Xuất theo số lượng và tiền'},
      {code: '2', name: 'Xuất tổng hợp'}
    ]
    this.items = [
      { label: 'Nghiệp vụ bán hàng' },
      { label: 'report' },
      { label: 'Xuất theo khách hàng' },
    ];
    this.home = { icon: 'pi pi-home' };
  }

}
