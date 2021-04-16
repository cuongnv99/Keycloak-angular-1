import { Component, OnInit } from '@angular/core';
import {TableData} from "../../../models/table.model";
import {EmployeeService} from "../../../services/api/employee.service";

@Component({
  selector: 'app-manage-old-machine-price',
  templateUrl: './manage-old-machine-price.component.html',
  styleUrls: ['./manage-old-machine-price.component.scss']
})
export class ManageOldMachinePriceComponent implements OnInit {
  items:any[];
  home:any;
  tableData: TableData;
  date3: Date;
  branch: any[] = [
    { name: 'test', key: "" },
  ];
  isOpenSearchModal: boolean;
  isOpenSearchProductModal: boolean;
  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.items = [
      { label: 'Quản lý định giá máy cũ' }
    ];
    this.home = {icon: 'pi pi-home'};
    this.employeeService.getManageOldMachinePrice().subscribe(res => {
      this.tableData = res;
    })
  }

}
