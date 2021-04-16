import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../../services/api/employee.service';
export interface TableDataPaymentVouchers{
    cells: any;
    datas: any;
}
@Component({
    selector: 'app-payment-vouchers',
    templateUrl: './payment-vouchers.component.html',
    styleUrls: ['./payment-vouchers.component.scss']
})
export class PaymentVouchersComponent implements OnInit {
    
    tableDataPaymentVouchers: TableDataPaymentVouchers;
    items: any[];

    constructor(private employeeService: EmployeeService) { }

    ngOnInit(): void {
        this.employeeService.getTableDataPaymentVouchers().subscribe((res: TableDataPaymentVouchers) => {
            this.tableDataPaymentVouchers = res;
        });
        this.items = [
            { icon: 'pi pi-home', label: '  Trang chủ' },
            { label: 'Nghiệp vụ bán hàng' },
            { label: 'Phiếu chi' },
        ];
    }
}
