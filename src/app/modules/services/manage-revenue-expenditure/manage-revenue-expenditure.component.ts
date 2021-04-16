import { Component, OnInit } from '@angular/core';
import {TableData} from "../../../models/table.model";
import {EmployeeService} from "../../../services/api/employee.service";

@Component({
  selector: 'app-manage-revenue-expenditure',
  templateUrl: './manage-revenue-expenditure.component.html',
  styleUrls: ['./manage-revenue-expenditure.component.scss']
})
export class ManageRevenueExpenditureComponent implements OnInit {
  items:any[];
  saleList: any[] = [];
  date3: Date;
  date4: Date;
  tableData: TableData;
  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.items = [
      { icon: 'pi pi-home', label: ' Trang chủ' },
      { label: 'Payment' },
      { label: 'Quản lý thu chi' },
    ];
    this.employeeService.getManageRevenueAndExpenditure().subscribe(res => {
      this.tableData = res;
    })
  }

}
