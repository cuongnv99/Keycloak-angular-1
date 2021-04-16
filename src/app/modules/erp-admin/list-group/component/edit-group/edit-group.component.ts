import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TableData } from '../../../../../models/table.model';
import { GroupERPService } from '../../../../../services/admin-erp/group.service';

@Component({
    selector: 'app-edit-group',
    templateUrl: './edit-group.component.html',
    //   styleUrls: ['./list-menu-user.component.scss']
})
export class EditGroupComponent implements OnInit, OnDestroy {
    @Input() GroupInfo = null;
    @Output() onCloseModal = new EventEmitter();
    @Input() onOpenGroup: boolean;
    @Output() newEditGroupInfo = new EventEmitter();
    tableData: TableData;

    constructor(
        private groupERPService: GroupERPService,
        public activatedRoute: ActivatedRoute,
        public router: Router
    ) { }

    ngOnInit(): void {
      
    }

    ngOnDestroy(): void {
        this.onCloseModal.unsubscribe();
    }

    onEditGroup() {
        this.groupERPService.EditGroup(this.GroupInfo,this.GroupInfo.id).subscribe((res) =>{
            console.log(res,"edit::")
            this.GroupInfo = res;
        })
        this.newEditGroupInfo.emit(this.GroupInfo);
        window.location.reload();
    }

}
