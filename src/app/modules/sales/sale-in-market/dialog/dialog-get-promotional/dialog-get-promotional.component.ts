import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { EmployeeService } from '../../../../../services/api/employee.service';
export interface TablePromotionalData{
  cells: any;
  datas: any;
}
@Component({
  selector: 'app-dialog-get-promotional',
  templateUrl: './dialog-get-promotional.component.html',
  styleUrls: ['./../../sale-in-market.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DialogGetPromotinalComponent implements OnInit {

  tablePromotionalData: TablePromotionalData;
  @Output() openBarcodeModal = new EventEmitter();
  @Input() PromotinalDialog: boolean;
  @Output() onCloseModal = new EventEmitter();
  isOpenPromotinalSecond:boolean;
  
  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.employeeService.getTablePromotionalData().subscribe((res: TablePromotionalData) => {
      this.tablePromotionalData = res;
    });
  }

}
