import { Component, OnInit } from '@angular/core';
import { TableData } from '../../../models/table.model';
import { EmployeeService } from '../../../services/api/employee.service';

@Component({
  selector: 'app-quan-ly-yeu-cau-xuat-hang',
  templateUrl: './quan-ly-yeu-cau-xuat-hang.component.html',
  styleUrls: ['./quan-ly-yeu-cau-xuat-hang.component.scss']
})
export class QuanLyYeuCauXuatHangComponent implements OnInit {

  tableData: TableData;
  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.employeeService.getTableData().subscribe(res => {
      this.tableData = res;
    })
  }

}
