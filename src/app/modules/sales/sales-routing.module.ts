import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PreOrderManagementComponent } from './pre-order-management/pre-order-management.component';
import { QuanLyYeuCauXuatHangComponent } from './quan-ly-yeu-cau-xuat-hang/quan-ly-yeu-cau-xuat-hang.component';
import { SaleInMarketComponent } from './sale-in-market/sale-in-market.component';
import { XuatBanTraGopKhongMatLaiComponent } from './xuat-ban-tra-gop-khong-mat-lai/xuat-ban-tra-gop-khong-mat-lai.component';
import {CreateReservationRequestComponent} from "./create-reservation-request/create-reservation-request.component";

const routes: Routes = [
  {
    path: 'sale-in-market',
    component: SaleInMarketComponent
  },
  {
    path: 'xuat-ban-tra-gop-k-mat-lai',
    component: XuatBanTraGopKhongMatLaiComponent
  },
  {
    path: 'quan-ly-yeu-cau-xuat-ban',
    component: QuanLyYeuCauXuatHangComponent
  },
  {
    path: 'quan-ly-yeu-cau-dat-truc',
    component: PreOrderManagementComponent
  },
  {
    path: 'tao-yeu-cau-dat-truoc',
    component: CreateReservationRequestComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesRoutingModule { }
