import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-customer-info-view-modal',
  templateUrl: './customer-info-view-modal.component.html',
  styleUrls: ['./customer-info-view-modal.component.scss']
})
export class CustomerInfoViewModalComponent implements OnInit {

  customerInfoFrm: FormGroup;

  @Input() isOpenModal: boolean;
  @Output() onCloseModal = new EventEmitter();
  @Output() openSearchEmployeeModal = new EventEmitter();
  gender: boolean;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.customerInfoFrm = this.formBuilder.group({
      customer: [],
      customerId: [],
      customerName: [],
      gender: [],
      phoneNumber: [],
      taxCode: [],
      email: [],
      birthDate: [],
      cmnd: [],
      ctBank: [],
      province: [],
      district: [],
      commune: [],
      addressContact: [],
      addressBill: [],
      placeDeliver: [],
      receiver: [],
      receiverPhone: [],
      revicerEmail: [],
      position: [],
      organizationName: [],
      isCustomerInd: [],
      buyer: [],
      bank: [],
      bankCode: [],
      lawPaper:[]
    })
  }

  selectProduct() {

  }

}
