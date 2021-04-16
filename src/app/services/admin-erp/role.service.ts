import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiKeycloakService } from '../api/api-keycloak.service';
import { ApiService } from '../api/api.service';


@Injectable({
    providedIn: 'root'
})
export class RoleERPService {

    constructor(
        private apiKeycloakService: ApiKeycloakService,
    ) { }

    getRole(): Observable<any> {
        return this.apiKeycloakService.get('admin/realms/SSO_VTLM/roles')
    }

    addRole(body: any): Observable<any> {
        return this.apiKeycloakService.post('admin/realms/SSO_VTLM/roles',body)
    }

    EditRole(data: any,id:number): Observable<any> {
        return this.apiKeycloakService.put(`admin/realms/SSO_VTLM/roles-by-id/${id}`, data)
    }

    DeleteRole(id: number): Observable<any> {
        return this.apiKeycloakService.delete(`admin/realms/SSO_VTLM/roles-by-id/${id}`)
    }


}
