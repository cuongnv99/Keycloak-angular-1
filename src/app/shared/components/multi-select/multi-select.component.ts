import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { IMultiSelect } from '../../../models/multi-select.model';
import { VIETNAMES_SPECIFIC_CHARACTER } from '../../enums/constants';

@Component({
  selector: 'app-multi-select',
  templateUrl: './multi-select.component.html',
  styleUrls: ['./multi-select.component.scss']
})
export class MultiSelectComponent implements OnInit {

  @Input() set datas(val) {
    this._data = val;
    this.bindingData = val;
  };
  get datas(): IMultiSelect[] {
    return this._data
  }
  _data: any[];
  bindingData: IMultiSelect[];
  @Output() onChangeSelect = new EventEmitter();
  isSelectAll: boolean;
  @Input() searchable: boolean;
  @Output() onClkSearch = new EventEmitter();
  @Output() onChange = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  onSearch() {
    this.onClkSearch.emit();
  }

  onChangeValue() {
    this.onChange.emit(this.bindingData);
  }

  customSearchStore(term: string, item: any) {
    term = term.toLocaleLowerCase().trim();
    return (item.code + " - " + item.value).toLocaleLowerCase().indexOf(term) > -1;
  }

  blockSpecialChars(event) {
    var regex = new RegExp("^[a-zA-Z0-9-\\s]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!(regex.test(key) || VIETNAMES_SPECIFIC_CHARACTER.includes(key))) {
      event.preventDefault();
      return false;
    }
  }

  selectAll() {
    this.isSelectAll = !this.isSelectAll;
    if (this.bindingData != null && this.datas.length != this.bindingData.length) {
      this.isSelectAll = true;
    }
    if (this.isSelectAll) {
      this.bindingData = this.datas;
    } else {
      this.bindingData = [];
    }
  }
}
