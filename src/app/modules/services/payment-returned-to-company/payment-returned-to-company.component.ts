import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-returned-to-company',
  templateUrl: './payment-returned-to-company.component.html',
  styleUrls: ['./payment-returned-to-company.component.scss']
})
export class PaymentReturnedToCompanyComponent implements OnInit {
  gender: boolean;
  date3: Date;
  saleList: any[] = [];
  isOpenSearchEmplModal: any;
  constructor() { }

  ngOnInit(): void {
    this.date3 = new Date();
  }

}
