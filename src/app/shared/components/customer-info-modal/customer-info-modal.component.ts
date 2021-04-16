import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeSelection } from '../../../models/employeeSelection.model';

@Component({
  selector: 'app-customer-info-modal',
  templateUrl: './customer-info-modal.component.html',
  styleUrls: ['./customer-info-modal.component.scss']
})
export class CustomerInfoModalComponent implements OnInit, OnDestroy {

  viettelAccForm: FormGroup;
  erpAccForm: FormGroup;
  
  isOpenSearchUserModal: boolean;
  employee: EmployeeSelection;
  
  @Input() isOpenModal: boolean;
  @Output() onCloseModal = new EventEmitter();
  @Output() openSearchEmployeeModal = new EventEmitter();
  @Output() confirmOTP = new EventEmitter();
  @Output() reVokeOTP = new EventEmitter();
  @Output() addNewAcc = new EventEmitter();
  @Output() saveChange = new EventEmitter();

  gender: string;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.initViettelAccFr();
    this.initErpForm();
  }

  initViettelAccFr() {
    this.viettelAccForm = this.formBuilder.group({
      viettelId: [{value: '', disabled: true}],
      phoneNumber: [{value: '', disabled: true}],
      cusIdentify: [{value: '', disabled: true}],
      cusFullName: [{value: '', disabled: true}],
      address: [{value: '', disabled: true}],
      birthDate: [{value: '', disabled: true}],
      otpCode: [],
      totalPoint: [{value: '', disabled: true}]
    });
  }

  initErpForm() {
    this.erpAccForm = this.formBuilder.group({
      customerId: [],
      customerName: [{value: '', disabled: true}],
      gender: [],
      lawPaper: [],
      phoneNumber: [],
      birthDate: [],
      email: [],
      taxCode: [],
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
      bankCode: []
    });
  }

  ngOnDestroy(): void {
    this.onCloseModal.unsubscribe();
  }

  update() {
    this.onCloseModal.emit();
  }

  SelectUser(event) {
    this.employee = {employeeId: event.id, employeeName: event.username}
  }
}
