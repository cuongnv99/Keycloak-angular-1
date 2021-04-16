import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dialog-employee',
  templateUrl: './dialog-employee.component.html',
  styleUrls: ['./../../sale-in-market.component.scss']
})
export class DialogEmployeeComponent implements OnInit {

  @Input() customer: string;
  @Output() openCusInfoViewModal = new EventEmitter();

  displayEmployee: boolean

  constructor() { }

  ngOnInit(): void {
  }

  showEmployeeDialog() {
    this.openCusInfoViewModal.emit();
  }
}
