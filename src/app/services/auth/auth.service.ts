import {environment as config} from '../../../environments/environment';
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {filter, mergeMapTo, mergeMap} from 'rxjs/operators';
import {Subscription, of, timer, BehaviorSubject, Observable} from 'rxjs';
import {HttpClient, HttpParams} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {KeycloakTokenModel} from '../../models/KeycloakToken.model';
import { KeycloakService } from 'keycloak-angular';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // auth0 = new auth0.WebAuth({
  //   // clientID: `${config.auth.clientId}`,
  //   // domain: `${config.auth.domain}`,
  //   // responseType: 'token id_token',
  //   // audience: `${config.auth.audience}`,
  //   // redirectUri: `${window.location.origin}${this.location.prepareExternalUrl('callback')}`,
  //   // scope: 'openid profile email access:shipper'
  // });

  refreshSubscription: Subscription;

  private authSubject = new BehaviorSubject<boolean>(this.isAuthenticated());
  public auth$ = this.authSubject.asObservable();
  public userInfo: any;
  private accessToken = null;

  username: string;

  returnUrl = '/';

  constructor(
    public router: Router,
    private http: HttpClient,
    private keycloakService: KeycloakService
  ) {
  }

  // public login(username: string, password: string, returnUrl: string): Observable<any> {
  //   console.log('AuthService login()');

  //   return this.http.post<any>(`${config.auth.host}${config.auth.login}`
  //     ,
  //     {
  //       client_id: 'angular',
  //       username,
  //       password,
  //       grant_type: 'password',
  //       client_secret: 'be01b82f-2723-48d7-80c3-91bba959d5a0'
  //     },
  //     {
  //       headers: {
  //         'Content-Type': 'application/x-www-form-urlencoded',
  //       }
  //     }
  //   )
  //     .pipe(map((authResult: KeycloakTokenModel) => {
  //       this.username = username;
  //       console.log('AuthService login() authResult:::', authResult);

  //       // this.returnUrl = returnUrl;
  //       // login successful if there's a jwt token in the response
  //       if (authResult && authResult.access_token) {
  //         // this.accessToken = authResult.access_token;

  //         // store user details and jwt token in local storage to keep user logged in between page refreshes
  //         this.setSession(authResult);
  //         this.authSubject.next(true);
  //         // this._userService.getUser(this.username).subscribe((result) => {
  //         //   if (result) {
  //         //     console.log('AuthService _userService.getUser result:::', result);
  //         //     this.userInfo = result;
  //         //     localStorage.setItem('full_name', this.userInfo.full_name);
  //         //     localStorage.setItem('image_path', this.userInfo.image_path);
  //         //   }
  //         //
  //         // });
  //       } else {
  //         this.authSubject.next(false);
  //       }

  //       return authResult;
  //     }));
  // }

  // public loginDefault(): void {
  //   this.login('shipper');
  // }

  public handleAuthentication(): void {
    // this.auth0.parseHash((err, authResult) => {
    //   if (authResult && authResult.accessToken && authResult.idToken) {
    //     window.location.hash = '';
    //     this.setSession(authResult);
    //     this.authSubject.next(true);
    //     this.router.navigate(['/']);
    //   } else if (err) {
    //     this.authSubject.next(false);
    //     this.router.navigate(['/login']);
    //     console.log(err);
    //   }
    // });
  }

  private setSession(authResult): void {
    console.log('AuthService setSession() authResult:::', authResult);

    // Set the time that the Access Token will expire at
    // const expiresAt = JSON.stringify((3 * 60 * 60 * 1000) + new Date().getTime());
    localStorage.setItem('access_token', authResult.access_token);
    localStorage.setItem('username', this.username);
    // localStorage.setItem('id_token', authResult.idToken);
    // localStorage.setItem('expires_at', expiresAt);
    // localStorage.setItem('currentUser', JSON.stringify(authResult));

    // this.scheduleRenewal();
    // this.scheduleRenewal();
    this.router.navigate(['/app']);
  }

  public logout(): void {
    // Remove tokens and expiry time from localStorage
    localStorage.removeItem('access_token');
    localStorage.removeItem('username');
    // localStorage.removeItem('image_path');
    // localStorage.removeItem('full_name');
    // localStorage.removeItem('expires_at');
    // localStorage.removeItem('id_token');
    // localStorage.removeItem('currentUser');
    // this.unscheduleRenewal();

    // this.auth0.logout({
    //   returnTo: `${window.location.origin}${this.location.prepareExternalUrl('login')}`
    // });

    this.authSubject.next(false);

    // Go back to the home route
    this.router.navigate(['/auth/login']);
  }

  public isAuthenticated(): boolean {
    // Check whether the current time is past the
    // Access Token's expiry time
    // const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    // return new Date().getTime() < expiresAt;
    // const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    // return new Date().getTime() < expiresAt;
    // if (localStorage.getItem('currentUser')) {
    //     // logged in so return true
    //     return true;
    // }
    if (this.getToken() != null){
      return true;
    }

    return false;
  }

  public getToken(): string {
    // return localStorage.getItem('access_token');
    let _token = null
    this.keycloakService.getToken().then((value)=>{
      console.log('getToken()... value:::', value)
      _token = value;
    });
    return _token;
  }

  public getUserName(): string {
    return localStorage.getItem('username');
  }

  // public getFullName(): string {
  //   return localStorage.getItem('full_name');
  // }
  //
  // public getImageUrl(): string {
  //   return localStorage.getItem('image_path');
  // }


  public renewToken(): void {
    console.log('renewing token');

    // this.auth0.checkSession({}, (err, result) => {
    //     if (err) {
    //     console.log(err);
    //     this.router.navigate(['/login']);
    //     } else {
    //     this.setSession(result);
    //     }
    // });
  }

  // public scheduleRenewal(): void {
  //   if (!this.isAuthenticated()) {
  //     return;
  //   }
  //   this.unscheduleRenewal();
  //
  //   const expiresAt = JSON.parse(window.localStorage.getItem('expires_at'));
  //
  //   const expiresIn$ = of(expiresAt).pipe(
  //     mergeMap(
  //       // tslint:disable-next-line:no-shadowed-variable
  //       expiresAt => {
  //         // const now = Date.now();
  //         // const now = moment().add(2, 'minutes').valueOf();
  //         // console.log(`schedule renewal - ${expiresAt - now}`, Math.max(1, expiresAt - now));
  //         // console.log('schedule renewal for ', expiresAt = now, Math.max(1, expiresAt - now));
  //         return timer(Math.max(1, expiresAt - now), 60000);
  //       }
  //     )
  //   );
  //
  //   this.refreshSubscription = expiresIn$.subscribe(
  //     () => {
  //       // console.log(`refresh sub`, r);
  //       this.renewToken();
  //       // this.scheduleRenewal();
  //     }
  //   );
  // }

  public unscheduleRenewal(): void {
    if (this.refreshSubscription) {
      this.refreshSubscription.unsubscribe();
    }
  }

  public navigateAfterLogin(): void {
    this.router.navigate([this.returnUrl]).then(() => {
      // clear return url
      console.log(`reset return url`);
      this.returnUrl = '/';
    });
  }

}
