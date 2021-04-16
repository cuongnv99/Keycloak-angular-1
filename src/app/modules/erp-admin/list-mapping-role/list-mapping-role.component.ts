import { Component, OnInit } from '@angular/core';
import { MappingRoleERPService } from '../../../services/admin-erp/mapping-role.service';

export interface MappingRole {
    function: string,
    userGroup: string,
    permission: string,
}

@Component({
    selector: 'app-list-mapping-role',
    templateUrl: './list-mapping-role.component.html',
    //   styleUrls: ['./list-mapping-role.component.scss']
})
export class ListMappingRoleComponent implements OnInit {

    mappingRole: MappingRole[] = []

    constructor(private mappingRoleERPService:MappingRoleERPService) { }

    ngOnInit(): void {
        this.mappingRole = [
            {
                function:"chức năng 1",
                userGroup:"nhóm người dùng 1",
                permission:"Quyền 1"
            }
        ]
        
    }

}
