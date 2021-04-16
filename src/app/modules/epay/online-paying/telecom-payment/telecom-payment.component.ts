import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-telecom-payment',
  templateUrl: './telecom-payment.component.html',
  styleUrls: ['./telecom-payment.component.scss']
})
export class TelecomPaymentComponent implements OnInit {
  listServices:any[] =[
    {name:"-- Chọn dịch vụ --"}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
