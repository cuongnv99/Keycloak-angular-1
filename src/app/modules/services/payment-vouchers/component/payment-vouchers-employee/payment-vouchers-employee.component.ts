import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-payment-vouchers-employee',
    templateUrl: './payment-vouchers-employee.component.html',
    styleUrls: ['../../payment-vouchers.component.scss'],
    encapsulation:ViewEncapsulation.None
})
export class PaymentVouchersEmployeeComponent implements OnInit {

    isOpenCusInfoViewModal: boolean;
    isOpenCustomerInfoModal: boolean;
    list:any[]=[];
    gender: string
    constructor() { }

    ngOnInit(): void {}
       
}