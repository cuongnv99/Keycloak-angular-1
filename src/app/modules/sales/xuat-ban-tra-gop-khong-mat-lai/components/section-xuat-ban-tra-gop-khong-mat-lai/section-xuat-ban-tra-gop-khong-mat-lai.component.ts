import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-section-xuat-ban-tra-gop-khong-mat-lai',
  templateUrl: './section-xuat-ban-tra-gop-khong-mat-lai.component.html',
  styleUrls: ['./../../xuat-ban-tra-gop-khong-mat-lai.component.scss']
})
export class SectionXuatBanTraGopKhongMatLaiComponent implements OnInit {
  XuatBanForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.XuatBanForm = this.formBuilder.group({
      total: [{value: '', disabled: true}],
      totalPrice: [{value: '', disabled: true}],
      receivable: [{value: '', disabled: true}]

    });
  }

}
