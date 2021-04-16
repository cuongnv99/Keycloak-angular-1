import { Component, OnInit } from '@angular/core';
import { TableData } from '../../../models/table.model';
import { EmployeeService } from '../../../services/api/employee.service';

@Component({
  selector: 'app-revenue-report',
  templateUrl: './revenue-report.component.html',
  styleUrls: ['./revenue-report.component.scss']
})
export class RevenueReportComponent implements OnInit {

  tableData: TableData;
  items: any[];
  home: any;

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.items = [
      { label: 'Nghiệp vụ bán hàng' },
      { label: 'report' },
      { label: 'Báo cáo doanh thu theo hình thức thanh toán' },
    ];
    this.home = {icon: 'pi pi-home'};
    this.employeeService.getRevenueReport().subscribe((res: TableData) => {
      this.tableData = res;
    });
  }
}
