import { Component, OnInit } from '@angular/core';
import { TableData } from '../../../models/table.model';
import { RoleERPService } from '../../../services/admin-erp/role.service';

@Component({
  selector: 'app-list-role',
  templateUrl: './list-role.component.html',
//   styleUrls: ['./list-menu-user.component.scss']
})
export class ListRoleComponent implements OnInit {
  detailInfo: any;
  openDetail: boolean;
  RoleInfo:any;
  tableData: TableData;
  openDialog: boolean ;
  onOpenGroup: boolean;
  cells: any = [
      // { "id": 1, "attr": "id", "name": "id", "type": "text", "width": 150, "isFrozen": false, "editable": true },
      { "id": 2, "attr": "name", "name": "Tên", "type": "text", "width": 100, "isFrozen": false, "editable": true,"isHref":true },
      { "id": 3, "attr": "composite", "name": "Hổn hợp", "type": "text", "width": 100, "isFrozen": false, "editable": true,"isHref":false },
      { "id": 4, "attr": "description", "name": "Miêu tả", "type": "text", "width": 100, "isFrozen": false, "editable": true ,"isHref":false},
      { "id": 5, "attr": "action", "name": "Thao tác", "type": "text", "width": 100, "isFrozen": false, "editable": true },
    ];

  constructor(
    private roleERPService: RoleERPService,
  ) { }

  ngOnInit(): void {
    this.getAll()
  }

  getAll(){
    this.roleERPService.getRole().subscribe((res) => {
      console.log('getRole:::', res);
      this.tableData= {
        cells:this.cells,
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
      this.roleERPService.DeleteRole(event).subscribe((res) => {
        this.tableData.datas = res;
        console.log(res, "delete::");
  
        this.getAll()
      })
    }
    
  }

  editUser(eventEdit:any){
    this.RoleInfo = eventEdit;
    console.log( this.RoleInfo.id,"eventEdit:::");
  }

  newEditRoleInfo(event:any){
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