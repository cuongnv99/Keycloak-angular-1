import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { EmployeeService } from '../../../../../services/api/employee.service';

export interface TablePaymentData {
  cells: any;
  datas: any;
}

@Component({
  selector: 'app-payment-detail',
  templateUrl: './payment-detail.component.html',
  styleUrls: ['./../../sale-in-market.component.scss']
})
export class PaymentDetailComponent implements OnInit {
  PaymentForm: FormGroup
  @Input() paymentDialog: boolean;
  @Output() onCloseModal = new EventEmitter();
  tablePaymentData:TablePaymentData
  constructor(
    private formBuilder: FormBuilder,
    private employeeService: EmployeeService
  ) { }

  ngOnInit(): void {
    this.initForm();
    this.employeeService.getTablePaymentData().subscribe((res: TablePaymentData) => {
      this.tablePaymentData = res;
    });
  }

  initForm() {
    this.PaymentForm = this.formBuilder.group({
      test1: [{ value: '', disabled: true }],
      test2: [{ value: '', disabled: true }],
      test3: [{ value: '', disabled: true }],
      test4: [{ value: '', disabled: true }],
      test5: [{ value: '', disabled: true }],
      test6: [{ value: '', disabled: true }]
    })
  }


}
