import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { authGuard } from './shared/auth.guard';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent,canActivate:[authGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'edit', component: EditComponent,canActivate:[authGuard]},
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login' } // wildcard route should be the last one
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
