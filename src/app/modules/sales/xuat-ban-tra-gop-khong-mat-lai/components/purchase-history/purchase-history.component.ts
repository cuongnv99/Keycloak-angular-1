import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TableData } from '../../../../../models/table.model';

@Component({
  selector: 'app-purchase-history',
  templateUrl: './purchase-history.component.html',
  styleUrls: ['./../../xuat-ban-tra-gop-khong-mat-lai.component.scss'],
 
})
export class PurchaseHistoryComponent implements OnInit {

  tableData: TableData;
  PurchaseHistory: boolean
  constructor() { }

  ngOnInit(): void {}

  showPurchaseHistory() {
    this.PurchaseHistory = true
  }
}
