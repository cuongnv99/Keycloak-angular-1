import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import moment from 'moment';

@Component({
  selector: 'app-exchange-searching-filter',
  templateUrl: './exchange-searching-filter.component.html',
  styleUrls: ['./exchange-searching-filter.component.scss']
})
export class ExchangeSearchingFilterComponent implements OnInit {

  exchangeSearchForm: FormGroup;

  isOpenSearchEmplModal: boolean;

  fromDate: string;
  toDate: string;
  items: any[];
  home: any;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
    this.items = [
      { label: 'Nghiệp vụ bán hàng' },
      { label: 'Bán hàng' },
      { label: 'Tra cứu lập bù giao dịch' },
    ];
    this.home = {icon: 'pi pi-home'};
  }

  initForm() {
    this.exchangeSearchForm = this.formBuilder.group({
      employee: [],
      fromDate: [],
      toDate: [],
      status: []
    });
  }

  dateFrFormat() {
    if (this.fromDate && this.fromDate.length === 8 && this.isNumber(this.fromDate)) {
      let date = this.fromDate.slice(4) + "/" + this.fromDate.slice(2, 4) + "/" + this.fromDate.slice(0, 2);
      this.exchangeSearchForm.patchValue({
        fromDate: new Date(date)
      })
    }
  }

  dateToFormat() {
    if (this.toDate && this.fromDate.length === 8 && this.isNumber(this.toDate)) {
      let date = this.toDate.slice(4) + "/" + this.toDate.slice(2, 4) + "/" + this.toDate.slice(0, 2);
      this.exchangeSearchForm.patchValue({
        toDate: new Date(date)
      })
    }
  }

  getFrDate(event) {
    this.fromDate = event.target.value;
  }

  getToDate(event) {
    this.toDate = event.target.value;
  }

  isNumber(str: string) {
    var regex = new RegExp("^[0-9]+$");
    if (!(regex.test(str))) {
      return false;
    }
    return true;
  }
}
