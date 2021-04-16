import { Component, OnInit } from '@angular/core';
import {TableData} from "../../../models/table.model";
import {EmployeeService} from "../../../services/api/employee.service";

@Component({
  selector: 'app-create-bill-different-month',
  templateUrl: './create-bill-different-month.component.html',
  styleUrls: ['./create-bill-different-month.component.scss']
})
export class CreateBillDifferentMonthComponent implements OnInit {
  items:any[];
  home:any;
  isOpenSearchModal: boolean;
  isOpenBarcodeModal: boolean;
  tableData: TableData;
  date3: Date;
  branch: any[] = [
    { name: 'test', key: "" },
  ];
  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.date3 = new Date();
    this.employeeService.getManageOldMachinePrice().subscribe(res => {
      this.tableData = res;
    })
  }

}
