import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-count-bill',
  templateUrl: './count-bill.component.html',
  styleUrls: ['./count-bill.component.scss']
})
export class CountBillComponent implements OnInit {

  listPayments : any[] = [
    {name:"Tiền mặt"},
    {name:"Chuyển khoản"},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
