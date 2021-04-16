import { Component, OnInit } from '@angular/core';
import { TableData } from '../../../models/table.model';
import { EmployeeService } from '../../../services/api/employee.service';

@Component({
  selector: 'app-published-coupon-management',
  templateUrl: './published-coupon-management.component.html',
  styleUrls: ['./published-coupon-management.component.scss']
})
export class PublishedCouponManagementComponent implements OnInit {

  tableData: TableData;
  items: any[];
  home: any;
  
  openModelModal: boolean;
  openProductModal: boolean;

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.employeeService.getCouponInfo().subscribe((res: TableData) => {
      this.tableData = res;
    });
    this.items = [
      { label: 'Nghiệp vụ bán hàng' },
      { label: 'Service' },
      { label: 'Quản lý thông tin coupon đã phát hàng' },
    ];
    this.home = {icon: 'pi pi-home'};
  }

}
