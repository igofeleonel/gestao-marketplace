import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../services/user';
import { UserAuthService } from '../../services/user-auth';
import { Router, RouterLink } from '@angular/router';
import { take } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterLink],
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
})
export class LoginComponent {
  loginErrorMessage = '';
  useForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  private readonly _userService = inject(UserService);
  private readonly _userAuthService = inject(UserAuthService);
  private readonly _router = inject(Router);

  login() {
    if (this.useForm.invalid) return;

    this._userService
      .login(
        this.useForm.get('email')?.value as string,
        this.useForm.get('password')?.value as string
      )
      .pipe(take(1))
      .subscribe({
        next: (response) => {
          this.loginErrorMessage = '';

          // salvar o token no localstorage
          this._userAuthService.setUserToken(response.data.token);
          // redirecionar para a tela de produtos
          this._router.navigate(['/products']);
        },
        error: (error) => {
          console.log(error);

          this.loginErrorMessage = error.error.message;
        },
      });
  }
}
