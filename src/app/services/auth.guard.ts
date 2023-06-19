import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    const isAuthenticated = this.authService.isAuthenticated();

    if (isAuthenticated !== null && isAuthenticated !== undefined) {
      return true; // Permite o acesso à rota
    } else {
      this.router.navigate(['/login']); // Redireciona para a página de login
      return false; // Bloqueia o acesso à rota
    }
  }
}
