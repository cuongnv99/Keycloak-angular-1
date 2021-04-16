import { Component, OnInit } from '@angular/core';
import { TableData } from '../../../models/table.model';
import { EmployeeService } from '../../../services/api/employee.service';

@Component({
  selector: 'app-ct-pre-order-management',
  templateUrl: './ct-pre-order-management.component.html',
  styleUrls: ['./ct-pre-order-management.component.scss']
})
export class CtPreOrderManagementComponent implements OnInit {

  tableData: TableData;
  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.employeeService.getCtPreOrder().subscribe((res: TableData) => {
      this.tableData = res;
    });

  }

}
