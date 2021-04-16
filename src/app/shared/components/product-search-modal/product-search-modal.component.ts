import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductSearchTable } from '../../../models/product-search-table.model';

@Component({
  selector: 'app-product-search-modal',
  templateUrl: './product-search-modal.component.html',
  styleUrls: ['./product-search-modal.component.scss']
})
export class ProductSearchModalComponent implements OnInit {

  @Input() products: ProductSearchTable[];

  @Input() isOpenModal: boolean;
  @Output() onCloseModal = new EventEmitter();

  productForm: FormGroup;
  
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.productForm = this.formBuilder.group({
      keySearch: [],
      typeGoods: [],
      groupGoods: [],
      producer: [],
      isInventory: []
    })
  }

}
