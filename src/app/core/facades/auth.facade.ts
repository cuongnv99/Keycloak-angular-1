import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {LoginUseCase} from '../usecases/login.usecase';
import {LogoutUseCase} from '../usecases/logout.usecase';


@Injectable({
  providedIn: 'root'
})
export class AuthFacade {

  private pToken$: Observable<any>;


  constructor(
    private loginUseCase: LoginUseCase,
    private logoutUseCase: LogoutUseCase
  ) {
  }

  token$(): Observable<any> {
    return this.pToken$;
  }

  login(username: string, password: string): any {
    this.loginUseCase.login(username, password);
  }

  logout(username: string): void {
    this.logoutUseCase.logout(username);
  }


}
