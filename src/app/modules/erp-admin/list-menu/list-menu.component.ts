import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { DynamicTabService } from '../../../services/dynamic-tab.sevice';

@Component({
    selector: 'app-list-menu',
    templateUrl: './list-menu.component.html',
    styleUrls: ['./list-menu.component.scss']
})
export class ListMenuComponent implements OnInit {

    items1: MenuItem[];

    constructor(private dynamicTabService: DynamicTabService) { }

    ngOnInit(): void {

        this.items1 = [
            {
                label: 'User',
                id: '1',
                routerLink: ['user']
            },
            {
                label: 'Group',
                id: '2',
                command: (event) => {
                    this.clickMenuItem(2);
                },
                routerLink: ['group']
            },
            {
                label: 'Role',
                id: '3',
                command: (event) => {
                    this.clickMenuItem(3);
                },
                routerLink: ['role']
            },
            {
                label: 'Mapping Role',
                id: '4',
                command: (event) => {
                    this.clickMenuItem(4);
                },
                routerLink: ['mappingRole']
            },

        ];

    }
    clickMenuItem(menu_id: number) {
        console.log(menu_id, "id::");
        this.dynamicTabService.setValueMenuCode(menu_id);
    }

}