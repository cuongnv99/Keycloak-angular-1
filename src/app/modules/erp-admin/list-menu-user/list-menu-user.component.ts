import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { TableData } from '../../../models/table.model';
import { UserERPService } from '../../../services/admin-erp/user.service';

@Component({
  selector: 'app-list-menu-user',
  templateUrl: './list-menu-user.component.html',
  styleUrls: ['./list-menu-user.component.scss']
})
export class ListMenuUserComponent implements OnInit {
  detailInfo: any;
  userInfo: any;
  tableData: TableData;
  openDialog: boolean;
  openDialogEdit: boolean;
  openDetail: boolean;
  cells: any = [
    // { "id": 1, "attr": "id", "name": "id", "type": "text", "width": 150, "isFrozen": false, "editable": true },
    { "id": 1, "attr": "username", "name": "Tên người dùng", "type": "text", "width": 100, "isFrozen": false, "editable": true, "isHref": true },
    { "id": 2, "attr": "email", "name": "Email", "type": "text", "width": 100, "isFrozen": false, "editable": true, "isHref": false },
    { "id": 3, "attr": "firstName", "name": "Họ", "type": "text", "width": 100, "isFrozen": false, "editable": true, "isHref": false },
    { "id": 4, "attr": "lastName", "name": "Tên", "type": "text", "width": 100, "isFrozen": false, "editable": true, "isHref": false },
    { "id": 5, "attr": "action", "name": "Thao tác", "type": "text", "width": 100, "isFrozen": false, "editable": true },
  ];

  constructor(
    private userERPService: UserERPService,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.getAll()
  }

  getAll() {
    this.userERPService.getUser().subscribe((res) => {
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
      this.openDialogEdit = true
    }
  }

  deleteUser(event: any) {
    console.log(event,);
    if (confirm('Ban Co Muon Xoa TK')) {
      this.userERPService.DeleteUser(event).subscribe((res) => {
        this.tableData.datas = res;
        console.log(res, "delete::");

        this.getAll()
      })
    }

  }

  editUser(eventEdit: any) {

    this.userInfo = eventEdit;
    console.log(this.userInfo.id, "eventEdit:::");
  }

  newEditUserInfo(event: any) {
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

