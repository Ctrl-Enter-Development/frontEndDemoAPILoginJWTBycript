import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3333/api';
  private tokenCookieName = 'authToken'; // Nome do cookie que armazena o token

  constructor(private http: HttpClient, private cookieService: CookieService) {}

  isAuthenticated(): Observable<boolean> {
    // Verifique se o usuário está autenticado
    const token = this.cookieService.get(this.tokenCookieName); // Obtenha o token do cookie

    if (token) {
      // Token encontrado, faça uma verificação na API para validar o token
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

      return this.http.get<any>(`${this.apiUrl}/validateToken`, { headers }).pipe(
        map(response => true), // O token é válido, portanto, o usuário está autenticado
        catchError(error => of(false)) // Ocorreu um erro na validação do token, portanto, o usuário não está autenticado
      );
    } else {
      // Token não encontrado, o usuário não está autenticado
      return of(false);
    }
  }

  setAuthToken(token: string): void {
    // Armazene o token no cookie seguro
    this.cookieService.set(this.tokenCookieName, token, null, '/', 'example.com', true, 'Strict');
  }

  removeAuthToken(): void {
    // Remova o token do cookie
    this.cookieService.delete(this.tokenCookieName, '/', 'example.com', true, 'Strict');
  }
}
