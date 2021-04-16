import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../../services/api/employee.service';

export interface TableDataVouchersCare {
    cells: any;
    datas: any;
}

@Component({
    selector: 'app-create-vouchers-care',
    templateUrl: './create-vouchers-care.component.html',
    styleUrls: ['./create-vouchers-care.component.scss']
})
export class CreateVouchersCareComponent implements OnInit {

    items: any[];
    tableDataVouchersCare: TableDataVouchersCare;

    constructor(private employeeService: EmployeeService) { }

    ngOnInit(): void {

        this.employeeService.getTableDataVouchersCare().subscribe((res: TableDataVouchersCare) => {
            this.tableDataVouchersCare = res;
        });

        this.items = [
            { icon: 'pi pi-home', label: '  Trang chủ' },
            { label: 'Nghiệp vụ bán hàng' },
            { label: 'Tạo chứng từ huỷ Care+' },
        ];
    }
}
