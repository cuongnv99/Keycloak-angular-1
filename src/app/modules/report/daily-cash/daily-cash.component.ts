import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-daily-cash',
  templateUrl: './daily-cash.component.html',
  styleUrls: ['./daily-cash.component.scss']
})
export class DailyCashComponent implements OnInit {
  openEmployeeSearchModal: boolean;
  listWarehouse:any[] =[
    {name: 'New York', code: 'NY'},
    {name: 'Rome', code: 'RM'},
    {name: 'London', code: 'LDN'},
    {name: 'Istanbul', code: 'IST'},
    {name: 'Paris', code: 'PRS'}
  ]
  startDate: Date;
  constructor() { }

  ngOnInit(): void {
    this.startDate = new Date;
  }

}
