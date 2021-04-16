import {Component, OnInit} from '@angular/core';
import {EmployeeService} from '../../../services/api/employee.service';

export interface TableDataXuatBan {
  cells: any;
  datas: any;
}

@Component({
  selector: 'app-xuat-ban-tra-gop-khong-mat-lai',
  templateUrl: './xuat-ban-tra-gop-khong-mat-lai.component.html',
  styleUrls: ['./xuat-ban-tra-gop-khong-mat-lai.component.scss']
})
export class XuatBanTraGopKhongMatLaiComponent implements OnInit {

  items: any[];
  isOpenBarcodeModal: boolean;
  isOpenPromotinalDialog: boolean;
  isOpenPromotinalComboDialog: boolean;
  tableDataXuatBan: TableDataXuatBan;
  detailsales: any[] = [{name: 'Giảm giá phiếu quà tặng'}];
  isOpenSaleDialog: boolean;

  constructor(private employeeService: EmployeeService) {
  }

  ngOnInit(): void {
    this.employeeService.getTablesDataXuatBan().subscribe((res: TableDataXuatBan) => {
      this.tableDataXuatBan = res;
    });
    this.items = [
      {icon: 'pi pi-home', label: '  Trang chủ'},
      {label: 'Bán hàng'},
      {label: 'Bán hàng trả góp '},
    ];

  }

}
