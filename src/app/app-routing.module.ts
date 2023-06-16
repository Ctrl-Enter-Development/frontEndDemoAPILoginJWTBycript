import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginUserComponent } from './login-user/login-user.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { EditionUserComponent } from './edition-user/edition-user.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';

const routes: Routes = [
  { path: '', component: LoginUserComponent },
  { path: 'registerUser', component: RegisterUserComponent },
  { path: 'editUser', component: EditionUserComponent },
  { path: 'deleteUser', component: DeleteUserComponent },
  { path: 'welcome', component: WelcomePageComponent },
  // Outras rotas e redirecionamentos aqui
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
