import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { GroupERPService } from '../../../../../services/admin-erp/group.service';
import { RoleERPService } from '../../../../../services/admin-erp/role.service';

export interface RoleKeyclockModel {
    id: any;
    name: string;
    composite: boolean;
    description: string;
}

@Component({
    selector: 'app-detail-group',
    templateUrl: './detail-group.component.html',
    //   styleUrls: ['./detail-user.component.scss']
})
export class DetailGroupComponent implements OnInit, OnChanges {

    @Input() detailInfo;
    @Input() openDetail: boolean;
    @Output() onCloseModal = new EventEmitter;
    frmGroup: FormGroup;
    sourceRole: RoleKeyclockModel[];
    targetRole: RoleKeyclockModel[];

    constructor(
        private fb: FormBuilder,
        private roleERPService: RoleERPService,
        private groupERPService: GroupERPService
    ) { }

    ngOnInit(): void {
        this.initForm();

        this.roleERPService.getRole().subscribe((res) => {
            this.sourceRole = res;
            // console.log(this.sourceRole,"thực hiện để đẩy role sang target");
            this.targetRole = [];  
        })
      
    }

    initForm() {
        this.frmGroup = this.fb.group({
            name: [],
            path: []
        })
    }

    ngOnChanges(): void {
        if (this.frmGroup) {
            this.frmGroup.patchValue({
                ...this.detailInfo
            })
        }
    }

    onSetRoleOfGroup(){
        // console.log(this.targetRole,"Đã nhận được role");
        this.groupERPService.updateRoleMapping(this.targetRole,this.detailInfo.id).subscribe((res)=>{
            console.log(res,"aaaaaaaa");
            alert("Success! Role mappings updated.")
        })
    }
}
