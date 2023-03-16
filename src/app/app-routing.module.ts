import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserPostsComponent } from './components/posts/user-posts/user-posts.component';
import { allUsersComponent } from './components/users/allUsers/allUsers.component';

const routes: Routes = [
  { path: '', component: allUsersComponent },
  { path: 'posts', component:UserPostsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }