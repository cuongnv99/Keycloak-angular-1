import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assess-old-product-filter',
  templateUrl: './assess-old-product-filter.component.html',
  styleUrls: ['./assess-old-product-filter.component.scss']
})
export class AssessOldProductFilterComponent implements OnInit {

  items: any[];
  home: any;
  
  isOpenCustomerInfoModal: boolean;
  isOpenSearchEmplModal: boolean;
  isOpenBarcodeModal: boolean;
  constructor() { }

  ngOnInit(): void {
    this.items = [
      { label: 'Nghiệp vụ bán hàng' },
      { label: 'Service' },
      { label: 'Định giá máy cũ' },
    ];
    this.home = {icon: 'pi pi-home'};
  }

}
