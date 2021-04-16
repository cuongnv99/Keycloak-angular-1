import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ModelData } from '../../../models/model-data.model';

@Component({
  selector: 'app-model-search-modal',
  templateUrl: './model-search-modal.component.html',
  styleUrls: ['./model-search-modal.component.scss']
})
export class ModelSearchModalComponent implements OnInit {

  @Input() modelData: ModelData[];

  @Input() isOpenModal: boolean;
  @Output() onCloseModal = new EventEmitter();

  modelForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.modelForm = this.formBuilder.group({
      keySearch: [],
      typeGoods: [],
      groupGoods: [],
      producer: []
    })
  }
}
