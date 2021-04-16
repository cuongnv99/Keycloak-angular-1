import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { EmployeeSelection } from '../../../../../models/employeeSelection.model';

@Component({
  selector: 'app-filter-sale-market',
  templateUrl: './filter-sale-market.component.html',
  styleUrls: ['./../../sale-in-market.component.scss']
})
export class FilterSaleMarketComponent implements OnInit {

  items: any[];
  home: any

  saleMarketForm: FormGroup;
  saleList: any[] = []
  isOpenCustomerInfoModal: boolean;
  isOpenSearchEmplModal: boolean;
  isOpenCusInfoViewModal: boolean;
  isOpenBarcodeModal: boolean;
  isOpenPromotinalDialog:boolean;
  isOpenPromotinalComboDialog: boolean;
  money: any[] = [
    { name: 'Tiền mặt', key: "TM" },
  ]
  listGiam: any[] = [
    { name: '--Chọn lý do giảm--', key: "" },
  ]

  memberPhone: string;
  isValidMemPhone: boolean;
  stores: any[] = [];
  notifyMess: string;
  openNotifyModal: boolean;
  employee: EmployeeSelection;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
    this.items = [
      { icon: 'pi pi-home', label: '  Trang chủ' },
      { label: 'Bán hàng' },
      { label: 'Bán hàng nhanh' },
      { label: 'Bán hàng siêu thị' },
    ];
    this.home = {icon: 'pi pi-home'};
  }

  initForm() {
    this.saleMarketForm = this.formBuilder.group({
      member: [],
      customer: [],
      phoneNumber: [{ value: '', disabled: true }],
      store: [],
      provice: [],
      district: [],
      commue: [],
      address: [],
      taxCode: [],
      employee: [],
      barCode: [],
      coupon: [],
      exportStore: [{ value: '', disabled: true }],
      content: []
    })
  }

  clearMemeber() {
    console.log("stringg...")
    this.saleMarketForm.patchValue({
      member: ""
    });
  }

  onEnterMember(event) {
    this.memberPhone = event.target.value;
    if (event.keyCode === 13 || event.keyCode === 9) {
      if (!this.memberPhone.startsWith("0")) {
        this.notifyMess = "Số điện thoại bắt đầu bằng số 0";
        this.openNotifyModal = true;
        this.isValidMemPhone = false;
      } else {
        this.isValidMemPhone = true;
        this.isOpenCustomerInfoModal = true;
      }
    }
  }

  SelectEmployee(event) {
    this.employee = { employeeId: event.id, employeeName: event.username }
  }
}
