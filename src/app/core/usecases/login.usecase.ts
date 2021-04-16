
import {AuthService} from '../../services/auth/auth.service';

export class LoginUseCase {

 constructor(private authService: AuthService) {

 }

 login(username: string, password: string): any{
   // return this.authService.login(username, password);
   return null;
 }

}


