import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-general-information',
  templateUrl: './general-information.component.html',
  styleUrls: ['./general-information.component.scss']
})
export class GeneralInformationComponent implements OnInit {
  listGender:any[] =[
    {name: 'Nam', code: 'NY'},
    {name: 'Nữ', code: 'RM'},
    {name: 'Khác', code: 'LDN'},
  ];
  isOpenSearchErpCustomer: boolean;
  isOpenSearchCrmCustomer: boolean;
  date3: Date;
  constructor() { }

  ngOnInit(): void {
    this.date3 = new Date();
  }

}
