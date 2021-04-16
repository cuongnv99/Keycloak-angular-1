import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-return-product-report',
  templateUrl: './return-product-report.component.html',
  styleUrls: ['./return-product-report.component.scss']
})
export class ReturnProductReportComponent implements OnInit {

  openEmployeeSearchModal: boolean;
  openProductSearchModal: boolean;
  reportTypes = [];

  items: any[];
  home: any;

  constructor() { }

  ngOnInit(): void {
    this.reportTypes = [
      {code: '1', name: 'Báo cáo xuất đổi trả IMEI'},
      {code: '2', name: 'Báo cáo đổi trả hàng'}
    ]
    this.items = [
      { label: 'Nghiệp vụ bán hàng' },
      { label: 'report' },
      { label: 'Xuất theo khách hàng' },
    ];
    this.home = { icon: 'pi pi-home' };
  }


}
