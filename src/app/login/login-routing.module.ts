import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '@app/login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent, data: { title: 'Ingresa con un usuario' } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
