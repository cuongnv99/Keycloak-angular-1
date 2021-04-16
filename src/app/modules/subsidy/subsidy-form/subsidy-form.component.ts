import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subsidy-form',
  templateUrl: './subsidy-form.component.html',
  styleUrls: ['./subsidy-form.component.scss']
})
export class SubsidyFormComponent implements OnInit {
  isOpenBarcodeModal: boolean;
  constructor() { }

  ngOnInit(): void {
  }

}
