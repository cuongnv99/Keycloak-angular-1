import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiKeycloakService } from '../api/api-keycloak.service';
import { ApiService } from '../api/api.service';


@Injectable({
    providedIn: 'root'
})
export class GroupERPService {

    constructor(
        private apiKeycloakService: ApiKeycloakService,
    ) { }

    getGroup(): Observable<any> {
        return this.apiKeycloakService.get('admin/realms/SSO_VTLM/groups')
    }

    addGroup(body: any): Observable<any> {
        return this.apiKeycloakService.post('admin/realms/SSO_VTLM/groups',body)
    }


    EditGroup(data: any,id:number): Observable<any> {
        return this.apiKeycloakService.put(`admin/realms/SSO_VTLM/groups/${id}`, data)
    }

    DeleteGroup(id: number): Observable<any> {
        return this.apiKeycloakService.delete(`admin/realms/SSO_VTLM/groups/${id}`)
    }

    updateRoleMapping(data:any,id:number): Observable<any> {
        return this.apiKeycloakService.post(`admin/realms/SSO_VTLM/groups/${id}/role-mappings/realm`,data)
    }

}
