import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductSearch } from '../../../models/product-search.model';
import { EmployeeService } from '../../../services/api/employee.service';

export interface TableBarcodeData {
  cells: any;
  datas: any;
}
@Component({
  selector: 'app-barcode-modal',
  templateUrl: './barcode-modal.component.html',
  styleUrls: ['./barcode-modal.component.scss']
})
export class BarcodeModalComponent implements OnInit {

  tableBarcodeData: TableBarcodeData
  productForm: FormGroup;

  @Input() isOpenModal: boolean;
  @Output() onCloseModal = new EventEmitter();
  @Input() product: ProductSearch;

  selectedProduct: ProductSearch;

  constructor(
    private formBuilder: FormBuilder,
    private employeeService: EmployeeService
  ) { }

  ngOnInit(): void {
    this.initForm();
    this.employeeService.getTableBarcodeData().subscribe((res: TableBarcodeData) => {
      this.tableBarcodeData = res;
    });
  }

  initForm() {
    this.productForm = this.formBuilder.group({
      keySearch: [],
      product: [],
      productGroup: [],
      productor: [],
      store: [{ value: '', disabled: true }],
      isExist: []
    })
  }

  selectProduct() {
    this.isOpenModal = false;
  }
}
