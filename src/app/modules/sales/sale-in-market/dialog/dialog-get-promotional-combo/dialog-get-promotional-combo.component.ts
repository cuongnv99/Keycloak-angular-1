import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dialog-get-promotional-combo',
  templateUrl: './dialog-get-promotional-combo.component.html',
  styleUrls: ['./../../sale-in-market.component.scss']
})
export class DialogGetPromotinalComboComponent implements OnInit {
 
  @Input() PromotinalComboDialog: boolean;
  @Output() onCloseModal = new EventEmitter();
  @Output() openBarcodeModal = new EventEmitter();
 
  constructor() { }

  ngOnInit(): void {
  }

  
}
