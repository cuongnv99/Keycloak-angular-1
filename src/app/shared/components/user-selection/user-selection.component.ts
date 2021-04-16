import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IEmployeeSearch } from '../../../models/employee-search.model';
import { EmployeeSelection } from '../../../models/employeeSelection.model';
import { EmployeeService } from '../../../services/api/employee.service';

@Component({
  selector: 'app-user-selection',
  templateUrl: './user-selection.component.html',
  styleUrls: ['./user-selection.component.scss']
})
export class UserSelectionComponent implements OnInit {

  @Input() label: string;
  @Input() employee: EmployeeSelection;
  @Output() onComplete = new EventEmitter();
  @Output() clickSearchBtn = new EventEmitter();

  employeeId: string;
  employeeName: string;
  listEmployee: IEmployeeSearch[];

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.employeeService.getSearchEmployees().subscribe(res => {
      this.listEmployee = res.content;
    });
    this.label = 'NV bán'
  }

  enterSearch(event) {
    if (event.keyCode === 13) {
      let employee = this.listEmployee.find(e => e.id === event.target.value);
      this.employeeName = employee ? employee.username : '';
      this.getEmployee();
    }
  }

  getEmployee() {
    // if (this.employee.employeeId !== this.emId) {
    //   this.onComplete.emit(this.emId);
    // }
    this.onComplete.emit(this.employeeId);
  }

  enterEm(event) {
    event.preventDefault();
    return false;
  }

}
