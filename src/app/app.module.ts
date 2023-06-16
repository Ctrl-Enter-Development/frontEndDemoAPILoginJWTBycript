import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginUserComponent } from './login-user/login-user.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { EditionUserComponent } from './edition-user/edition-user.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginUserComponent,
    RegisterUserComponent,
    EditionUserComponent,
    DeleteUserComponent,
    WelcomePageComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
