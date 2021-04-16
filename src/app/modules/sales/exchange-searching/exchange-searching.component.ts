import { Component, OnInit } from '@angular/core';
import { TableData } from '../../../models/table.model';
import { EmployeeService } from '../../../services/api/employee.service';

@Component({
  selector: 'app-exchange-searching',
  templateUrl: './exchange-searching.component.html',
  styleUrls: ['./exchange-searching.component.scss']
})
export class ExchangeSearchingComponent implements OnInit {
  
  tableData: TableData;
  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.employeeService.getExchangeSearching().subscribe((res: TableData) => {
      this.tableData = res;
    });

  }

}
