import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IMultiSelect } from '../../../../models/multi-select.model';

@Component({
  selector: 'app-filter-form-component',
  templateUrl: './filter-form-component.component.html',
  styleUrls: ['./filter-form-component.component.scss']
})
export class FilterFormComponentComponent implements OnInit {

  preFilterForm: FormGroup;
  openSearchEmployee: boolean;
  employee: IMultiSelect[];
  items: any[];
  home: any;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
    this.items = [
      { label: 'Nghiệp vụ bán hàng' },
      { label: 'Bán hàng' },
      { label: 'Quản lý yêu cầu đặt trước' },
    ];
    this.home = {icon: 'pi pi-home'};
  }

  initForm() {
    this.preFilterForm = this.formBuilder.group({
      requirmentDateFr: [],
      requirmentDateTo: [],
      store: [],
      employee: [],
      ctPreOrder: [],
      exportType: [],
      status: [],
      keyWord: [],
      filterBy: [],
      isExist: []
    })
  }

  selectEmployee(event) {
    let arr = [];
    event.forEach(e => {
      arr.push({code: e.id, value: e.username});
    })
    console.log("event: " + JSON.stringify(arr))
    this.employee = arr;
  }
}
