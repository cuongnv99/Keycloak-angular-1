import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiKeycloakService } from '../api/api-keycloak.service';
import { ApiService } from '../api/api.service';


@Injectable({
    providedIn: 'root'
})
export class UserERPService {

    constructor(
        private apiKeycloakService: ApiKeycloakService,
    ) { }

    getUser(): Observable<any> {
        return this.apiKeycloakService.get('admin/realms/SSO_VTLM/users')
    }

    addUser(body: any): Observable<any> {
        return this.apiKeycloakService.post('admin/realms/SSO_VTLM/users',body)
    }

    getById(userId: number): Observable<any> {
        return this.apiKeycloakService.get(`admin/realms/SSO_VTLM/users/${userId}`);
    }

    EditUser(data: any,userId:number): Observable<any> {
        return this.apiKeycloakService.put(`admin/realms/SSO_VTLM/users/${userId}`, data)
    }

    DeleteUser(userId: number): Observable<any> {
        return this.apiKeycloakService.delete(`admin/realms/SSO_VTLM/users/${userId}`)
    }

    updateRoleMappingUser(data:any,userId:number): Observable<any> {
        return this.apiKeycloakService.post(`admin/realms/SSO_VTLM/users/${userId}/role-mappings/realm`,data)
    }

    updateGroupMappingUser(data:any,userId:number,groupId:number ): Observable<any> {
        return this.apiKeycloakService.put(`admin/realms/SSO_VTLM/users/${userId}/groups/${groupId}`,data)
    }
}
