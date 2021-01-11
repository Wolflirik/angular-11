import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { UserFormComponent } from './forms/user-form/user-form.component';
import { ErrorPageComponent } from './error-page/error-page.component';

const routes: Routes = [
  {path: 'user/list', component: UsersComponent},
  {path: 'user/list/1', redirectTo: 'user/list', pathMatch: 'full'},
  {path: 'user/list/:page', component: UsersComponent},
  {path: 'user/add', component: UserFormComponent},
  {path: 'user/update/:userId', component: UserFormComponent},
  {path: '', redirectTo: 'user/list', pathMatch: 'full'},
  {path: '**', component: ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
