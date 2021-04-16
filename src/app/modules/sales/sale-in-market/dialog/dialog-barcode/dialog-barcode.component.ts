import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dialog-barcode',
  templateUrl: './dialog-barcode.component.html',
  styleUrls: ['./../../sale-in-market.component.scss']
})
export class DialogBarcodeComponent implements OnInit {
  displayBarcode: boolean
  @Output() openBarcodeModal = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  showBarcodeDialog() {
    this.openBarcodeModal.emit();
  }
}
