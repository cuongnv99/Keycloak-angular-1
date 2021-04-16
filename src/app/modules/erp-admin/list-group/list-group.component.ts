import { Component, OnInit } from '@angular/core';
import { TableData } from '../../../models/table.model';
import { GroupERPService } from '../../../services/admin-erp/group.service';
import { UserERPService } from '../../../services/admin-erp/user.service';

 

@Component({
  selector: 'app-list-group',
  templateUrl: './list-group.component.html',
//   styleUrls: ['./list-menu-user.component.scss']
})
export class ListGroupComponent implements OnInit {

  detailInfo: any;
  openDetail: boolean;
  GroupInfo:any;
  tableData: TableData;
  openDialog: boolean ;
  onOpenGroup: boolean;
  cells: any = [
      // { "id": 1, "attr": "id", "name": "id", "type": "text", "width": 150, "isFrozen": false, "editable": true },
      { "id": 2, "attr": "name", "name": "Tên nhóm người dùng", "type": "text", "width": 100, "isFrozen": false, "editable": true, "isHref": true },
      { "id": 3, "attr": "path", "name": "Đường dẫn", "type": "text", "width": 100, "isFrozen": false, "editable": true,"isHref": false },
      { "id": 4, "attr": "action", "name": "Thao tác", "type": "text", "width": 100, "isFrozen": false, "editable": true },
    ];

  constructor(
    private groupERPService: GroupERPService,
  ) { }

  ngOnInit(): void {
    this.getAll()
  }

  getAll() {
    this.groupERPService.getGroup().subscribe((res) => {
      console.log('getAll:::', res);
      this.tableData = {
        cells: this.cells,
        datas: res
      }
    })
  }

  newDataAdd(event: any) {
    this.tableData.datas.push(event);
    this.getAll();
  }

  openEdit(event: any) {
    if (event == true) {
      this.onOpenGroup = true
    }
  }

  deleteUser(event: any) {
    console.log(event,);
    if(confirm('Ban Co Muon Xoa TK')){
      this.groupERPService.DeleteGroup(event).subscribe((res) => {
        this.tableData.datas = res;
        console.log(res, "delete::");
  
        this.getAll()
      })
    }
    
  }

  editUser(eventEdit:any){
    this.GroupInfo = eventEdit;
    console.log( this.GroupInfo.id,"eventEdit:::");
  }

  newEditGroupInfo(event:any){
    this.tableData.datas.push(event);
    this.getAll();
  }
  
  routerToDo(event: any) {
    if (event) {
      this.openDetail = true
    }
    this.detailInfo = event;
  }
}

