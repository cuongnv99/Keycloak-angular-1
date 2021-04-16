import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { EmployeeService } from '../../../../../services/api/employee.service';
export interface TableDetailSaleData {
  cells: any;
  datas: any;
}
@Component({
  selector: 'app-detail-sale',
  templateUrl: './detail-sale.component.html',
  styleUrls: ['./../../sale-in-market.component.scss']
})
export class DetailSaleComponent implements OnInit {
  DetailSaleForm: FormGroup;
  isOpenBarcodeModal: boolean;
  tableDetailSaleData: TableDetailSaleData
  @Input() saleDialog: boolean;
  @Output() onCloseModal = new EventEmitter();

  constructor(
    private formBuilder: FormBuilder,
    private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.initForm();
    this.employeeService.getTableDetailSaleData().subscribe((res: TableDetailSaleData) => {
      this.tableDetailSaleData = res;
    });
  }

  initForm() {
    this.DetailSaleForm = this.formBuilder.group({
      Barcode: [],
      totalPrice: [{ value: '', disabled: true }],
      totalV: [{ value: '', disabled: true }],
      barCode: [],
      totalViettel: [{ value: '', disabled: true }]
    })
  }
}
