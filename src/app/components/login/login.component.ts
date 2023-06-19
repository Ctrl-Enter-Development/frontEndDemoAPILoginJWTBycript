import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email = '';
  password = '';
  error = '';
  success = '';

  constructor(private authService: AuthService, private router: Router) {}

  login(): void {
    this.authService.login(this.email, this.password).subscribe(
      response => {
        // Lógica após o login bem-sucedido
        console.log('Login bem-sucedido');
        this.success = 'Login realizado com sucesso.';
        this.error = '';
        // Redirecionar para a página de dashboard ou outra página desejada
        this.router.navigate(['/dashboard']);
      },
      error => {
        // Lógica para lidar com erros no login
        this.error = 'Credenciais inválidas. Por favor, verifique seu email e senha.';
        this.success = '';
        console.log('Erro no login:', error.error.message);
      }
    );
  }
}
