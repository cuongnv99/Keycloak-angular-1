import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  displayModal: boolean;

  constructor(private keycloakService: KeycloakService,public router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.keycloakService.logout();
  }
  Click(){
    this.router.navigate(['app/erpAdmin/side-menu-admin-erp'])
   
  }
}
