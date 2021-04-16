import { Component, OnInit } from '@angular/core';
import {EmployeeService} from "../../../../services/api/employee.service";
import {EmployeeSelection} from "../../../../models/employeeSelection.model";
export interface tableDataXuatBan{
  cells: any;
  datas: any;
}

@Component({
  selector: 'app-general-information',
  templateUrl: './general-information.component.html',
  styleUrls: ['./general-information.component.scss']
})

export class GeneralInformationComponent implements OnInit {
  tableDataXuatBan : tableDataXuatBan;
  personRequest: EmployeeSelection;
  onlineEmpl: EmployeeSelection;
  isOpenBarcodeModal: boolean;
  isOpenPersonRequestModal: boolean;
  isOpenOnlineEmplModal: boolean;
  listOrderingProgram:any[] =[
    {name:"-- Chương trình đặt hàng --"}
  ]
  listRequestType:any[] =[
    {name:"-- Chọn loại yêu cầu xuất --"}
  ]
  listStatus:any[] =[
    {name:"1 - Tạo mới"}
  ]
  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.employeeService.getTablesData().subscribe((res: tableDataXuatBan) => {
      this.tableDataXuatBan = res;
    });
  }
  SelectPersonRequest(event) {
    this.personRequest = {employeeId: event.id, employeeName: event.username}
  }
  SelectOnlineEmpl(event) {
    this.onlineEmpl = {employeeId: event.id, employeeName: event.username}
  }
}
