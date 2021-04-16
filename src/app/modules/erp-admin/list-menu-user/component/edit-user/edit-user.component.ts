import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { adminUserKeyclockModel } from '../../../../../models/adminUserKeyclock.model';
import { TableData } from '../../../../../models/table.model';
import { UserERPService } from '../../../../../services/admin-erp/user.service';

@Component({
    selector: 'app-edit-user',
    templateUrl: './edit-user.component.html',
    //   styleUrls: ['./list-menu-user.component.scss']
})
export class EditUserComponent implements OnInit, OnDestroy, OnChanges {

    @Input() userInfo;
    @Output() onCloseModal = new EventEmitter();
    @Input() openDialogEdit: boolean;
    @Output() newEditUserInfo = new EventEmitter();
    tableData: TableData;
    frmGroup: FormGroup;

    constructor(
        private userERPService: UserERPService,
        public activatedRoute: ActivatedRoute,
        public router: Router,
        private fb: FormBuilder
    ) { }

    ngOnInit(): void {
      this.initForm();
    }

    initForm(){
        this.frmGroup = this.fb.group({
            username:[],
            email:[],
            firstName:[],
            lastName:[],
            enabled:[],
            emailVerified:[]
        })
    }

    ngOnChanges(): void {
        
    
      }

    ngOnDestroy(): void {
        this.onCloseModal.unsubscribe();
    }

    onEditUser() {
        this.userERPService.EditUser(this.userInfo,this.userInfo.id).subscribe((res) =>{
            console.log(res,"edit::")
            this.userInfo = res;    
        })
        this.newEditUserInfo.emit(this.userInfo);
        window.location.reload();
    }

}
