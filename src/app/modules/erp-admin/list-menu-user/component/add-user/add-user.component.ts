import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { adminUserKeyclockModel } from '../../../../../models/adminUserKeyclock.model';
import { TableData } from '../../../../../models/table.model';
import { UserERPService } from '../../../../../services/admin-erp/user.service';



@Component({
    selector: 'app-add-user',
    templateUrl: './add-user.component.html',
    //   styleUrls: ['./list-menu-user.component.scss']
})
export class AddUserComponent implements OnInit, OnDestroy {
    @Output() newDataAdd = new EventEmitter();
    @Output() onCloseModal = new EventEmitter();
    @Input() openDialog: boolean;
    tableData: TableData;
    dataObj = {} as adminUserKeyclockModel;

    constructor(
        private userERPService: UserERPService
    ) { }

    ngOnInit(): void {

    }

    onAddUser() {
        // đang lỗi vì phải reload()
        this.userERPService.addUser(this.dataObj).subscribe((res) => {
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
