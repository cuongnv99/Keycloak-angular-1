import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {OnlinePayingComponent} from "./online-paying/online-paying.component";
import {ManageOnlinePayingComponent} from "./manage-online-paying/manage-online-paying.component";
const routes: Routes = [
  {
    path: 'online-paying',
    component: OnlinePayingComponent
  },
  {
    path: 'manage-online-paying',
    component: ManageOnlinePayingComponent
  }
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class EpayRoutingModule {}
