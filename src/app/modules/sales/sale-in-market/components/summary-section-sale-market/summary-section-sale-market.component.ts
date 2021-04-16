import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-summary-section-sale-market',
  templateUrl: './summary-section-sale-market.component.html',
  styleUrls: ['./../../sale-in-market.component.scss']
})
export class SummarySectionSaleMarketComponent implements OnInit {

  sumarySaleForm: FormGroup;
  money: any[] = [];
  selectedItem = 'Tiền mặt';
  listGiam: any[] = [
    {name: 'Giảm giá phiếu quà tặng', key: 1},
  ];
  notifyMess: string;
  openNotifyModal: boolean;
  isOpenSaleDialog: boolean;
  isOpenPaymentDialog: boolean;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.initForm();
    this.money = ['Tiền mặt'];
  }

  initForm() {
    this.sumarySaleForm = this.formBuilder.group({
      isCash: [this.money[0]],
      totalAmount: [{value: 0, disabled: true}],
      paymentCost: [{value: 0, disabled: true}],
      debt: [{value: 0, disabled: true}],
      totalPrice: [],
      redundantCost: [{value: 0, disabled: true}],
      saleType: [],
      saleValue: [{value: 0, disabled: true}],
      price: [{value: 0, disabled: true}]
    });
  }

  onGetSales() {
    const saleValue = this.sumarySaleForm.get('saleType').value;
    if (saleValue) {
      this.openNotifyModal = true;
      if (saleValue === 1) {
        this.notifyMess = 'Vui lòng nhập sản phẩm trước khi áp dụng giảm giá';
      } else if (saleValue === 2) {
        this.notifyMess = 'Vui lòng nhập sản phẩm trước khi áp dụng giảm giá';
      } else if (saleValue === 3) {
        this.notifyMess = 'Vui lòng nhập sản phẩm trước khi áp dụng giảm giá';
      }
    }
  }
}
