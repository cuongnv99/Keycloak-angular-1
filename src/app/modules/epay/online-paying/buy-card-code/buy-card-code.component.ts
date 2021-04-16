import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buy-card-code',
  templateUrl: './buy-card-code.component.html',
  styleUrls: ['./buy-card-code.component.scss']
})
export class BuyCardCodeComponent implements OnInit {
  selectedDenominations: any = null;
  selectedNetwork: any = null;
  denominations: any[] = [
    {name: '10.000đ', key: '10000'},
    {name: '20.000đ', key: '20000'},
    {name: '30.000đ', key: '30000'},
    {name: '50.000đ', key: '50000'},
    {name: '100.000đ', key: '100000'},
    {name: '200.000đ', key: '200000'},
    {name: '300.000đ', key: '300000'},
    {name: '500.000đ', key: '500000'},
    {name: '1.000.000đ', key: '10000000'},
  ];
  network: any[] = [
    {name: 'Viettel', key: 'Viettel'},
    {name: 'Mobiphone', key: 'Mobi'},
    {name: 'Gmobile(Beeline)', key: 'Gmobile'},
    {name: 'Vinaphone', key: 'Vina'},
    {name: 'VietnamMobile', key: 'VietnamMobile'},
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
