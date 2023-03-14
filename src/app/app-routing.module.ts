import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { allUsersComponent } from './components/users/allUsers/allUsers.component';

const routes: Routes = [
  { path: '', component: allUsersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }