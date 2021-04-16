import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


export interface TableDataPaymentVouchers{
    cells: any;
    datas: any;
}

@Component({
    selector: 'app-payment-vouchers-pay',
    templateUrl: './payment-vouchers-pay.component.html',
    styleUrls: ['../../payment-vouchers.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class PaymentVouchersPayComponent implements OnInit {

    list:any[]=[]
    constructor() { }

    ngOnInit(): void {
        
    }
       
}