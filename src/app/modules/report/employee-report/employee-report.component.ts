import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-report',
  templateUrl: './employee-report.component.html',
  styleUrls: ['./employee-report.component.scss']
})
export class EmployeeReportComponent implements OnInit {

  openEmployeeSearchModal: boolean;
  openProductSearchModal: boolean;
  reportTypes = [];

  items: any[];
  home: any;

  constructor() { }

  ngOnInit(): void {
    this.reportTypes = [
      {code: '1', name: 'Số lượng máy theo nhân viên'},
      {code: '2', name: 'Báo cáo bán hàng phần mềm diệt virus Eset theo nhân viên'},
      {code: '3', name: 'Báo cáo chi tiết doanh thu đến từng nhân viên'},
      {code: '4', name: 'Chi tiết - Doanh số hàng theo IMEI'},
      {code: '5', name: 'Tổng hợp - Doanh số theo nhân viên bán'}
    ]
    this.items = [
      { label: 'Nghiệp vụ bán hàng' },
      { label: 'report' },
      { label: 'Xuất theo khách hàng' },
    ];
    this.home = { icon: 'pi pi-home' };
  }


}
