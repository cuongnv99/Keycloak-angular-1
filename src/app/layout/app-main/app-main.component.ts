import {Component, OnDestroy, OnInit} from '@angular/core';
import { DynamicTabService } from '../../services/dynamic-tab.sevice';
import {Subscription} from 'rxjs';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-app-main',
  templateUrl: './app-main.component.html',
  styleUrls: ['./app-main.component.scss']
})
export class AppMainComponent implements OnInit, OnDestroy {

  menuName: string;
  private sub: Subscription = new Subscription();

  constructor(private dynamicTabService: DynamicTabService,private keycloakService :KeycloakService) {

  }

  ngOnInit(): void {
    this.sub.add(
      this.dynamicTabService.getValueMenuName().subscribe((menuName: string) => {
        if (menuName) {
          this.menuName = menuName;
        }
      })
    );
  }

  Logout(){
    this.keycloakService.logout();
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
