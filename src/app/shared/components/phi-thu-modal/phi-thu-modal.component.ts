import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { EmployeeService } from '../../../services/api/employee.service';
export interface PhiThuData{
  cells: any;
  datas: any;
}
@Component({
  selector: 'app-phi-thu-modal',
  templateUrl: './phi-thu-modal.component.html',
  // styleUrls: ['./phi-thu-modal.component.scss'],

})
export class PhiThuModalComponent implements OnInit {

  phiThuData: PhiThuData
  @Input() paymentDialog: boolean;
  @Output() onCloseModal = new EventEmitter();
  
  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.employeeService.getTablePhiThuData().subscribe((res: PhiThuData) => {
      this.phiThuData = res;
    });
  }
  showDialog(){
    this.paymentDialog = true
}

}
