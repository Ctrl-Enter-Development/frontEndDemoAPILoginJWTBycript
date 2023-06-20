// auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { CookieService } from 'ngx-cookie-service';
import { environment } from './config';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = environment.apiUrl;

  private tokenCookieName = environment.tokenCookieName;
 // Nome do cookie que armazena o token

  constructor(private http: HttpClient, private cookieService: CookieService) {}

  login(email: string, password: string): Observable<any> {
    const payload = { email, password };
    return this.http.post<any>(`${this.apiUrl}/login`, payload).pipe(
      tap(response => {
        if (response.token) {
          this.setAuthToken(response.token); // Armazena o token no cookie se estiver presente na resposta
        }
      })
    );
  }

  isAuthenticated(): boolean {
    const token = this.cookieService.get(this.tokenCookieName); // Obtenha o token do cookie
    return !!token; // Retorna true se o token existir no cookie
  }

  setAuthToken(token: string): void {
    const expires = new Date();
    expires.setDate(expires.getDate() + 7);
    this.cookieService.set(this.tokenCookieName, token, expires, '/', 'localhost', true, 'Strict');
  }

  removeAuthToken(): void {
    this.cookieService.delete(this.tokenCookieName, '/', 'localhost', true, 'Strict');
  }
}
