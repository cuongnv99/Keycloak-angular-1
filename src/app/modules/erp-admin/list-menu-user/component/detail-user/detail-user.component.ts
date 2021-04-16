import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { GroupERPService } from '../../../../../services/admin-erp/group.service';
import { RoleERPService } from '../../../../../services/admin-erp/role.service';
import { UserERPService } from '../../../../../services/admin-erp/user.service';

export interface RoleKeyclockModel {
    id: any;
    name: string;
    composite: boolean;
    description: string;
}
export interface GroupKeyclockModel {
    id: any;
    name: string;
}

@Component({
    selector: 'app-detail-user',
    templateUrl: './detail-user.component.html',
    //   styleUrls: ['./detail-user.component.scss']
})
export class DetailUserComponent implements OnInit {

    @Input() detailInfo;
    @Input() openDetail: boolean;
    @Output() onCloseModal = new EventEmitter;
    frmGroup: FormGroup;
    sourceRole: RoleKeyclockModel[];
    targetRole: RoleKeyclockModel[];
    sourceGroup: GroupKeyclockModel[];
    targetGroup: GroupKeyclockModel[];

    constructor(
        private fb: FormBuilder,
        private roleERPService: RoleERPService,
        private userERPService: UserERPService,
        private groupERPService: GroupERPService
    ) { }

    ngOnInit(): void {
        this.initForm();
        // binding ra view
        if (this.frmGroup) {
            this.frmGroup.patchValue({
                ...this.detailInfo
            })
        }
        this.roleERPService.getRole().subscribe((res) => {
            this.sourceRole = res;
            // console.log(this.sourceRole,"thực hiện để đẩy role sang target");
            this.targetRole = [];
        })
        this.groupERPService.getGroup().subscribe((res) => {
            this.sourceGroup = res;
            this.targetGroup = [];
        })
    }

    initForm() {
        this.frmGroup = this.fb.group({
            username: [],
            email: [],
            firstName: [],
            lastName: [],
            enabled: [],
            emailVerified: []
        })
    }

    onSetRoleOfUser() {
        this.userERPService.updateRoleMappingUser(this.targetRole, this.detailInfo.id).subscribe((res) => {
            alert("Success! Role mappings updated.")
        })
    }

    onSetGroupOfUser() {
        console.log(this.detailInfo.id, "aaaa");
        console.log(this.sourceGroup, "sssssssss");
        for (let i = 0; i < this.targetGroup.length; i++) {
            this.userERPService.updateGroupMappingUser(this.targetGroup, this.detailInfo.id,this.targetGroup[i].id).subscribe((res) => {
                alert("Success! Group mappings updated.")
            })
        }
    }


}
