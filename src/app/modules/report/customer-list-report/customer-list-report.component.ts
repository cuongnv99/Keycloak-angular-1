import { Component, OnInit } from '@angular/core';
import { TableData } from '../../../models/table.model';
import { EmployeeService } from '../../../services/api/employee.service';

@Component({
  selector: 'app-customer-list-report',
  templateUrl: './customer-list-report.component.html',
  styleUrls: ['./customer-list-report.component.scss']
})
export class CustomerListReportComponent implements OnInit {
  
  tableData: TableData;
  items: any[];
  home: any;

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.items = [
      { label: 'Nghiệp vụ bán hàng' },
      { label: 'report' },
      { label: 'Báo cáo danh sách khách hàng' },
    ];
    this.home = {icon: 'pi pi-home'};
    this.employeeService.getCustomerListReport().subscribe((res: TableData) => {
      this.tableData = res;
    });
  }

}
