import { Component, OnInit } from '@angular/core';
import {TableData} from "../../../../models/table.model";
import {EmployeeService} from "../../../../services/api/employee.service";

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.scss']
})
export class ListCustomerComponent implements OnInit {
  listWarehouse:any[] =[
    {name: 'New York', code: 'NY'},
    {name: 'Rome', code: 'RM'},
    {name: 'London', code: 'LDN'},
    {name: 'Istanbul', code: 'IST'},
    {name: 'Paris', code: 'PRS'}
  ];
  tableData: TableData;
  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.employeeService.getManageOldMachinePrice().subscribe(res => {
      this.tableData = res;
    })
  }

}
