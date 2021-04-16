import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from "../../shared/shared.module";
import {PrimeNGModule} from "../../shared/primeng/primeng.module";
import {NgSelectModule} from "@ng-select/ng-select";
import {FieldsetModule} from 'primeng/fieldset';
import { ErpAdminRoutingModule } from './erp-admin-routing.module';
import { SideMenuErpAdminComponent } from './side-menu-erp-admin/side-menu-erp-admin.component';
import {PanelMenuModule} from 'primeng/panelmenu';
import { LayoutModule } from '../../layout/layout.module';
import { ListMenuUserComponent } from './list-menu-user/list-menu-user.component';
import { ListMenuComponent } from './list-menu/list-menu.component';
import { ListGroupComponent } from './list-group/list-group.component';
import { ListRoleComponent } from './list-role/list-role.component';
import { ListMappingRoleComponent } from './list-mapping-role/list-mapping-role.component';
import { AddUserComponent } from './list-menu-user/component/add-user/add-user.component';
import { EditUserComponent } from './list-menu-user/component/edit-user/edit-user.component';
import { AddGroupComponent } from './list-group/component/add-group/add-group.component';
import { EditGroupComponent } from './list-group/component/edit-group/edit-group.component';
import { AddRoleComponent } from './list-role/component/add-role/add-role.component';
import { EditRoleComponent } from './list-role/component/edit-role/edit-role.component';
import { DetailUserComponent } from './list-menu-user/component/detail-user/detail-user.component';
import { DetailGroupComponent } from './list-group/component/detail-group/detail-group.component';
import { DetailRoleComponent } from './list-role/component/detail-role/detail-role.component';




@NgModule({
  declarations: [
    SideMenuErpAdminComponent,
    ListMenuUserComponent,
    ListMenuComponent,
    ListGroupComponent,
    ListRoleComponent,
    ListMappingRoleComponent,
    //user
    AddUserComponent,
    EditUserComponent,
    DetailUserComponent,
    //group
    AddGroupComponent,
    EditGroupComponent,
    DetailGroupComponent,
    //role
    AddRoleComponent,
    EditRoleComponent,
    DetailRoleComponent
  ],
  imports: [
    CommonModule,
    ErpAdminRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    PrimeNGModule,
    NgSelectModule,
    FieldsetModule,
    PanelMenuModule,
    
  ]
})
export class ErpAdminModule { }
