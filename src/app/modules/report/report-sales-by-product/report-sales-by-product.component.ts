import { Component, OnInit } from '@angular/core';
import {EmployeeService} from "../../../services/api/employee.service";
import {TableData} from "../../../models/table.model";

@Component({
  selector: 'app-report-sales-by-product',
  templateUrl: './report-sales-by-product.component.html',
  styleUrls: ['./report-sales-by-product.component.scss']
})
export class ReportSalesByProductComponent implements OnInit {
  listWarehouse:any[] =[
    {name: 'New York', code: 'NY'},
    {name: 'Rome', code: 'RM'},
    {name: 'London', code: 'LDN'},
    {name: 'Istanbul', code: 'IST'},
    {name: 'Paris', code: 'PRS'}
  ]
  isOpenBarcodeModal: boolean;
  startDate: Date;
  tableData: TableData;
  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.startDate = new Date;
    this.employeeService.getManageOldMachinePrice().subscribe(res => {
      this.tableData = res;
    })
  }

}
