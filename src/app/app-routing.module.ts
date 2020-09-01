import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component'
import { RepoComponent } from './repo/repo.component';


const routes: Routes = [
  { path: 'profile', component: UserComponent},
  { path: 'repos', component: RepoComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
