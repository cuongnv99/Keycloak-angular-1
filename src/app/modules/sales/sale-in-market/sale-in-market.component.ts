import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {TableData} from '../../../models/table.model';
import {EmployeeService} from '../../../services/api/employee.service';

@Component({
  selector: 'app-sale-in-market',
  templateUrl: './sale-in-market.component.html',
  styleUrls: ['./sale-in-market.component.scss']
})
export class SaleInMarketComponent implements OnInit {

  tableData: TableData;

  constructor(private employeeService: EmployeeService) {
  }

  ngOnInit(): void {
    this.employeeService.getTablesData().subscribe((res: TableData) => {
      this.tableData = res;
    });
  }
}
