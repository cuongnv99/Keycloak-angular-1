import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment as config} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) {
  }

  get(url: string, params = new HttpParams()): Observable<any> {
    return this.http.get(`${config.api.host}${url}`, {observe: 'body', params});
  }

  post(url: string, body: any): Observable<any> {
    const headers = {'Content-Type': 'application/json'};
    return this.http.post(`${config.api.host}${url}`, body, {headers});
  }

  put(url: string, body: any): Observable<any> {
    return this.http.put(`${config.api.host}${url}`, body);
  }

  delete(url: string) {
    const headers = {'Content-Type': 'application/json'};
    return this.http.put(`${config.api.host}${url}`, {headers});
  }

  getHttpClient(): HttpClient{
    return this.http;
  }
}
