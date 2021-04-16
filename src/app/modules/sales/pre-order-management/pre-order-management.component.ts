import { Component, OnInit } from '@angular/core';
import { TableData } from '../../../models/table.model';
import { EmployeeService } from '../../../services/api/employee.service';

@Component({
  selector: 'app-pre-order-management',
  templateUrl: './pre-order-management.component.html',
  styleUrls: ['./pre-order-management.component.scss']
})
export class PreOrderManagementComponent implements OnInit {

  tableData: TableData;
  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.employeeService.getPreOrders().subscribe((res: TableData) => {
      this.tableData = res;
    });
  }

}
