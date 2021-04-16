import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LazyLoadEvent, PrimeNGConfig } from 'primeng/api';
import { IDepartment } from '../../../models/department.model';
import { IPosition } from '../../../models/position.model';
import { IEmployeeSearch } from '../../../models/employee-search.model';
import { GENDER } from '../../enums/constants';
import { getListOfYear } from '../../utils/datetime-util';
import { EmployeeService } from '../../../services/api/employee.service';

export interface TableUserSearchData{
   cells: any;
   datas: any;
 }

@Component({
   selector: 'app-user-search-modal',
   templateUrl: './user-search-modal.component.html',
   styleUrls: ['./user-search-modal.component.scss']
})
export class UserSearchModalComponent implements OnInit, OnDestroy {

   tableUserSearchData: TableUserSearchData;
    employeeSearchForm: FormGroup;

    genders = GENDER;
    birthYears = getListOfYear(1950, 2050);
    @Input() areas: any = [];
    @Input() departments: IDepartment[] = [];
    @Input() positions: IPosition[] = [];
    @Input() listResultUser: IEmployeeSearch[] = [];
    selectedEmployee: IEmployeeSearch[] = [];
 
    page: number = 0;
    pageRows: number = 10;
    totalRecords: number;
 
    @Input() isOpenModal: boolean;
    @Output() onCloseModal = new EventEmitter();
    @Output() onSearchEmployee = new EventEmitter();
    @Output() onSelectEmployee = new EventEmitter();
 
    constructor(private formBuilder: FormBuilder,
       private primengConfig: PrimeNGConfig,
       private employeeService: EmployeeService) {
    }
 
    ngOnInit(): void {
      //  this.employeeService.getSearchEmployees().subscribe(res => {
      //     this.listResultUser = res.content;
      //  });
      this.employeeService.getTableUserData().subscribe((res: TableUserSearchData) => {
         this.tableUserSearchData = res;
       });
       this.initFormGroup();
       this.primengConfig.ripple = true;
    }
    // showEmployeeSearch(){
    //    this.isOpenModal = true
    // }
 
    ngOnDestroy(): void {
       this.onCloseModal.unsubscribe();
       this.onSearchEmployee.unsubscribe();
       this.onSelectEmployee.unsubscribe();
    }
 
    public initFormGroup() {
       this.employeeSearchForm = this.formBuilder.group({
          searchKey: null,
          userLogin: true,
          fullName: true,
          address: null,
          phoneNumber: null,
          email: null,
          gender: null,
          birthYear: null,
          area: null,
          department: null,
          position: null,
          typeUser: null,
          MST: null
       });
    }
 
    searchEmployee() {
       this.onSearchEmployee.emit();
    }
 
    selectEmployee() {
       this.onCloseModal.emit();
       this.onSelectEmployee.emit(this.selectedEmployee);
    }
 
    loadCustomers(event: LazyLoadEvent) {
    }

}
