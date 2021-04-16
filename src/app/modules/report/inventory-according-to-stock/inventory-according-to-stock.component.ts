import { Component, OnInit } from '@angular/core';
import {TableData} from "../../../models/table.model";
import {EmployeeService} from "../../../services/api/employee.service";

@Component({
  selector: 'app-inventory-according-to-stock',
  templateUrl: './inventory-according-to-stock.component.html',
  styleUrls: ['./inventory-according-to-stock.component.scss']
})
export class InventoryAccordingToStockComponent implements OnInit {
  city: String = "val1";
  listWarehouse:any[] =[
    {name: 'New York', code: 'NY'},
    {name: 'Rome', code: 'RM'},
    {name: 'London', code: 'LDN'},
    {name: 'Istanbul', code: 'IST'},
    {name: 'Paris', code: 'PRS'}
  ]
  isOpenBarcodeModal: boolean;
  tableData: TableData;
  checked: boolean;
  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.employeeService.getManageOldMachinePrice().subscribe(res => {
      this.tableData = res;
    })
    this.checked = true;
  }

}
