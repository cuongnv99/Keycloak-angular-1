import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {EmployeeService} from '../../../../../services/api/employee.service';
export interface TablePromotional1{
  cells: any;
  datas: any;
}
@Component({
  selector: 'app-dialog-get-promotional-second',
  templateUrl: './dialog-get-promotional-second.component.html',
  styleUrls: ['./../../sale-in-market.component.scss']
})
export class DialogGetPromotinalSecondComponent implements OnInit {
  tablePromotional1: TablePromotional1;
  tablePromotional2: TablePromotional1;
  tablePromotional3: TablePromotional1;
  @Input() PromotinalSecondDialog: boolean;
  @Output() onCloseModal = new EventEmitter();

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.employeeService.getTablePromotional1().subscribe((res: TablePromotional1) => {
      this.tablePromotional1 = res;
    });
    this.employeeService.getTablePromotional2().subscribe((res: TablePromotional1) => {
      this.tablePromotional2 = res;
    });
    this.employeeService.getTablePromotional3().subscribe((res: TablePromotional1) => {
      this.tablePromotional3 = res;
    });
  }

}
