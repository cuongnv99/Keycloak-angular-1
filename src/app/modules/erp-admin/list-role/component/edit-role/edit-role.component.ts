import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TableData } from '../../../../../models/table.model';
import { RoleERPService } from '../../../../../services/admin-erp/role.service';

@Component({
    selector: 'app-edit-role',
    templateUrl: './edit-role.component.html',
    //   styleUrls: ['./list-menu-user.component.scss']
})
export class EditRoleComponent implements OnInit, OnDestroy {
    
    @Input() RoleInfo ;
    @Output() onCloseModal = new EventEmitter();
    @Input() onOpenGroup: boolean;
    @Output() newEditRoleInfo = new EventEmitter();
    eventChaneForm: FormGroup;
    tableData: TableData;

    constructor(
        private roleERPService: RoleERPService,
        public activatedRoute: ActivatedRoute,
        private fb: FormBuilder,
    ) { }

    ngOnInit(): void {
      this.initForm();
    }

    initForm(){
        this.eventChaneForm = this.fb.group({
            name:[{ value: '', disabled: true }],
            description:[],
            composite:[]
        })
    }


    ngOnDestroy(): void {
        this.onCloseModal.unsubscribe();
    }

    onEditRole() {
        this.roleERPService.EditRole(this.RoleInfo,this.RoleInfo.id).subscribe((res) =>{
            console.log(res,"edit::")
            this.RoleInfo = res;
        })
        this.newEditRoleInfo.emit(this.RoleInfo);
        window.location.reload();
    }

}
