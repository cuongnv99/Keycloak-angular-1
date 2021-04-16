import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { adminUserKeyclockModel } from '../../../../../models/adminUserKeyclock.model';
import { TableData } from '../../../../../models/table.model';
import { GroupERPService } from '../../../../../services/admin-erp/group.service';
import { UserERPService } from '../../../../../services/admin-erp/user.service';

export interface groupKeyclockModel{
    id:any;
    name:string;
    path:any;
    subGroups:any;
}

@Component({
    selector: 'app-add-group',
    templateUrl: './add-group.component.html',
    //   styleUrls: ['./list-menu-user.component.scss']
})
export class AddGroupComponent implements OnInit, OnDestroy {
 
    @Output() newDataAdd = new EventEmitter();
    @Output() onCloseModal = new EventEmitter();
    @Input() openDialog: boolean;
    tableData: TableData;
    dataObj = {} as groupKeyclockModel;

    constructor(
        private groupERPService: GroupERPService,
    ) { }

    ngOnInit(): void {

    }

    onAddGroup() {
        this.groupERPService.addGroup(this.dataObj).subscribe((res) => {
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
