import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListGroupComponent } from './list-group/list-group.component';
import { ListMappingRoleComponent } from './list-mapping-role/list-mapping-role.component';
import { DetailUserComponent } from './list-menu-user/component/detail-user/detail-user.component';
import { ListMenuUserComponent } from './list-menu-user/list-menu-user.component';
import { ListRoleComponent } from './list-role/list-role.component';
import { SideMenuErpAdminComponent } from './side-menu-erp-admin/side-menu-erp-admin.component';


const routes: Routes = [
  {
    path:"side-menu-admin-erp",
    component: SideMenuErpAdminComponent,
    children:[
      {
        path:"user",
        component: ListMenuUserComponent,
        // children:[
        //   {
        //     path:"detail/:id",
        //     component: DetailUserComponent,
        //   }
        // ]
      },
      {
        path:"group",
        component: ListGroupComponent
      },
      {
        path:"role",
        component: ListRoleComponent
      },
      {
        path:"mappingRole",
        component: ListMappingRoleComponent
      }
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ErpAdminRoutingModule { }
