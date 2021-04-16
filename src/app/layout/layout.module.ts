import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import {AppComponent} from './root/app.component';
import { FooterComponent } from './footer/footer.component';
import {LayoutRoutingModule} from './layout-routing.module';
import { SideBarComponent } from './side-bar/side-bar.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { SharedModule } from '../shared/shared.module';
import {PanelMenuModule} from 'primeng/panelmenu';
import {AppMainComponent} from './app-main/app-main.component';
import { PrimeNGModule } from '../shared/primeng/primeng.module';

@NgModule({
  declarations: [
    HeaderComponent,
    AppComponent,
    FooterComponent,
    SideBarComponent,
    AppMainComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    MatSidenavModule,
    SharedModule,
    PanelMenuModule,
    PrimeNGModule
  ],
  exports: [
    MatSidenavModule,
    SharedModule,
    PanelMenuModule
  ]
})
export class LayoutModule { }
