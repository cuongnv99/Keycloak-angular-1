import { Component, OnInit } from '@angular/core';
import { TableData } from '../../../models/table.model';
import { EmployeeService } from '../../../services/api/employee.service';

@Component({
  selector: 'app-assess-old-product',
  templateUrl: './assess-old-product.component.html',
  styleUrls: ['./assess-old-product.component.scss']
})
export class AssessOldProductComponent implements OnInit {

  tableData: TableData;
  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.employeeService.getAssessProducts().subscribe((res: TableData) => {
      this.tableData = res;
    });
  }

}
