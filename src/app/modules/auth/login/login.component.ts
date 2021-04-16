import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../services/auth/auth.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  eventChangeForm: FormGroup;
  submitted = false;


  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
  ) {
  }

  ngOnInit(): void {
    this.eventChangeForm = this.fb.group({
      username: ['cuongnd9', [Validators.required, Validators.minLength(5)]],
      password: ['123456', [Validators.required]]
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.eventChangeForm.invalid) {

      return;
    } else {
      console.log('value form::::', this.eventChangeForm.value);

      // this.authService.login(this.eventChangeForm.value.username, this.eventChangeForm.value.password, null).subscribe();
    }

  }

  // onClickLogin(): void {
  //   console.log('onClickLogin');
  //   console.log('username:::', this.username);
  //   console.log('password:::', this.password);
  //
  //   this.authService.login(this.username, this.password, null).subscribe();
  //
  //   // this.authService.login(this.loginForm.value.username, this.loginForm.value.password, this.returnUrl)
  //   //   .pipe(first())
  //   //   .subscribe(
  //   //     data => {
  //   //       // this.router.navigate([this.returnUrl]);
  //   //       this.loginForm.reset();
  //   //     },
  //   //     error => {
  //   //       // if (error.error.code !== undefined &&
  //   //       //     error.error.message !== undefined &&
  //   //       //     error.error.code === 'OP_EXCEPTION') {
  //   //       //   this.serverError = error.error.message;
  //   //       if (error) {
  //   //         this.serverError = `Tên tài khoản hoặc mật khẩu không đúng. Vui lòng kiểm tra lại.`;
  //   //       } else {
  //   //         // return a default error message
  //   //         this.serverError = `Tên tài khoản hoặc mật khẩu không đúng. Vui lòng kiểm tra lại.`;
  //   //       }
  //   //       this.loginForm.controls.password.setErrors({ invalid: true });
  //   //       this.error = error;
  //   //       this.loading = false;
  //   //     });
  //
  // }

}
