import {DatePipe} from '@angular/common';
import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-don-hang',
  templateUrl: './don-hang.component.html',
  styleUrls: ['./../../xuat-ban-tra-gop-khong-mat-lai.component.scss']
})
export class DonHangComponent implements OnInit {
  text = '';
  date = DatePipe;
  DonHangForm: FormGroup;
  maDH = '3216S02103000001';
  listKho: any[] = [{name: ''}];
  listTraGop: any[] = [{name: ''}];
  listTT: any[] = [{name: ''}];
  giamGia: any[] = [{name: ''}];
  HTgiao: any[] = [{name: ''}];
  status: any[] = [
    {name: 'Đã duyệt'},
    {name: 'Đã thanh toán'},
    {name: 'Đã xuất'},
    {name: 'Đã giao'},
    {name: 'Đã hủy'}
  ];
  isOpenCustomerInfoModal: boolean;
  isOpenSearchEmplModal: boolean;
  isOpenCusInfoViewModal: boolean;
  isOpenBarcodeModal: boolean;
  isOpenPaymentDialog: boolean;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.DonHangForm = this.formBuilder.group({
      warehouse: [{value: '', disabled: true}],
      salaryPercent: [],
      typeInstallment: [],
      prepay2: [{value: '', disabled: true}],
      prepay1: [{value: '', disabled: true}],
      prepayment: [{value: '', disabled: true}],
      totalPrepayment: [{value: '', disabled: true}],
      man: [{value: '', disabled: true}],
      content: [],
      toDate: [],
      binary:[],
      binary1: [{value: '', disabled: true}],
      binary2: [{value: '', disabled: true}],
      binary3: [{value: '', disabled: true}],
      binary4: [{value: '', disabled: true}]
    });
  }

  ClickGiamGia() {
    console.log('giảm giá');
  }

  ClickPhiThu() {
    console.log('phí thu');
  }

  onEnterMember(event) {
    if (event.keyCode === 13) {
      this.isOpenCustomerInfoModal = true;
    }
  }

  isTDateFormat(event) {
    console.log(event, 'aaaaaaaaaaaaaaaaaaaa');
    this.text = event.target.value;
  }

  checkInventoryDate() {

  }
}
