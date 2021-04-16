import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {QuicklinkModule, QuicklinkStrategy} from 'ngx-quicklink';
import {AppMainComponent} from './layout/app-main/app-main.component';
import {AuthGuard} from './services/auth/auth-guard.service';

@NgModule({
  imports: [
    QuicklinkModule,
    RouterModule.forRoot(
      [
        {
          path: '',
          pathMatch: 'full',
          redirectTo: 'app'
        },
        {
          path: 'app',
          component: AppMainComponent,
          canActivate: [AuthGuard],
          canActivateChild: [AuthGuard],
          children: [
            {
              path: '',
              loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule)
            },
            {
              path: 'erpAdmin',
              loadChildren: () => import('./modules/erp-admin/erp-admin.module').then(m => m.ErpAdminModule)
            },
            {
              path: 'sales',
              loadChildren: () => import('./modules/sales/sales.module').then(m => m.SalesModule)
            },
            {
              path: 'subsidy',
              loadChildren: () => import('./modules/subsidy/subsidy.module').then(m => m.SubsidyModule)
            },
            {
              path: 'epay',
              loadChildren: () => import('./modules/epay/epay.module').then(m => m.EpayModule)
            },
            {
              path: 'services',
              loadChildren: () => import('./modules/services/services.module').then(m => m.ServicesModule)
            },
            {
              path: 'coupons',
              loadChildren: () => import('./modules/coupon/coupon.module').then(m => m.CouponModule)
            },
            {
              path: 'report',
              loadChildren: () => import('./modules/report/report.module').then(m => m.ReportModule)
            },
            {
              path: 'crm',
              loadChildren: () => import('./modules/crm/crm.module').then(m => m.CrmModule)
            }
          ]
        },

        {
          path: 'auth',
          loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)
        },

      ],
      {
        preloadingStrategy: QuicklinkStrategy,
        useHash: false,
        scrollPositionRestoration: 'enabled'
      }
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
