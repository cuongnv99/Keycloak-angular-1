import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-export-by-customer',
  templateUrl: './export-by-customer.component.html',
  styleUrls: ['./export-by-customer.component.scss']
})
export class ExportByCustomerComponent implements OnInit {

  openEmployeeSearchModal: boolean;
  openProductSearchModal: boolean;
  reportTypes = [];

  items: any[];
  home: any;

  constructor() { }

  ngOnInit(): void {
    this.reportTypes = [
      {code: '1', name: 'Danh sách khách hàng đã bán'},
      {code: '2', name: 'Xuất theo khách hàng'}
    ]
    this.items = [
      { label: 'Nghiệp vụ bán hàng' },
      { label: 'report' },
      { label: 'Xuất theo khách hàng' },
    ];
    this.home = { icon: 'pi pi-home' };
  }

}
