import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  login(email: string, password: string) {
    const body = { email, password };
    return this.http.post(`${this.apiUrl}/login`, body);
  }

  signup(email: string, password: string) {
    const body = { email, password };
    return this.http.post(`${this.apiUrl}/signup`, body);
  }

  // Outros métodos para interagir com a API de autenticação
}
