import { Component, OnInit } from '@angular/core';
interface RequestType {
  name: string,
  code: string
}
@Component({
  selector: 'app-manage-exchange-return',
  templateUrl: './manage-exchange-return.component.html',
  styleUrls: ['./manage-exchange-return.component.scss']
})
export class ManageExchangeReturnComponent implements OnInit {
  items:any[];
  home:any;
  date3: Date;
  type: RequestType[];
  selectedType: RequestType[];
  branch: any[] = [
    { name: 'test', key: "" },
  ];
  constructor() { }

  ngOnInit(): void {
    this.items = [
      { label: 'Quản lý yêu cầu nhập đổi/trả hàng' }
    ];
    this.home = {icon: 'pi pi-home'};
    this.type = [
      {name: 'New York', code: 'NY'},
      {name: 'Rome', code: 'RM'},
      {name: 'London', code: 'LDN'},
      {name: 'Istanbul', code: 'IST'},
      {name: 'Paris', code: 'PRS'}
    ];
  }

}
