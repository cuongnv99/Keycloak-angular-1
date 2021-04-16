import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { TableData } from '../../../../../models/table.model';
import { RoleERPService } from '../../../../../services/admin-erp/role.service';


export interface RoleKeyclockModel{
    id:any;
    name:string;
    composite:boolean;
    description:string;
}

@Component({
    selector: 'app-add-role',
    templateUrl: './add-role.component.html',
    //   styleUrls: ['./list-menu-user.component.scss']
})
export class AddRoleComponent implements OnInit, OnDestroy {
 
    @Output() newDataAdd = new EventEmitter();
    @Output() onCloseModal = new EventEmitter();
    @Input() openDialog: boolean;
    tableData: TableData;
    dataObj = {} as RoleKeyclockModel;

    constructor(
        private roleERPService: RoleERPService,
    ) { }

    ngOnInit(): void {

    }

    onAddRole() {
        this.roleERPService.addRole(this.dataObj).subscribe((res) => {
            console.log(res,"add:::");
            this.dataObj = res
        })
        this.newDataAdd.emit(this.dataObj);
        window.location.reload()
    }

    ngOnDestroy(): void {
        this.onCloseModal.unsubscribe();
    }

}
