import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmployeeService } from '../../../../../services/api/employee.service';



@Component({
    selector: 'app-payment-vouchers-detail',
    templateUrl: './payment-vouchers-detail.component.html',
    styleUrls: ['../../payment-vouchers.component.scss'],
    encapsulation:ViewEncapsulation.None
})
export class PaymentVouchersDetailComponent implements OnInit {

    list:any[]=[]
    constructor() { }

    ngOnInit(): void {
        
    }
       
}