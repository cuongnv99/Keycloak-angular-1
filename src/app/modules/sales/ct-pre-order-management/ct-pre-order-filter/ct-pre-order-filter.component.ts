import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ct-pre-order-filter',
  templateUrl: './ct-pre-order-filter.component.html',
  styleUrls: ['./ct-pre-order-filter.component.scss']
})
export class CtPreOrderFilterComponent implements OnInit {

  items: any[];
  home: any;
  
  openModelModal: boolean;
  openProductModal: boolean;
  constructor() { }

  ngOnInit(): void {
    this.items = [
      { label: 'Nghiệp vụ bán hàng' },
      { label: 'Bán hàng' },
      { label: 'Quản lý chương trình đặt trước' },
    ];
    this.home = {icon: 'pi pi-home'};
  }

}
