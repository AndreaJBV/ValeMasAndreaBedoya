import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { AlbumListComponent } from './album-list/album-list.component';

const routes: Routes = [
  {path:'', redirectTo:'user-list', pathMatch:'full'},
  {path: 'user-list', component: UserListComponent},
  {path: 'user-details/:id', component: UserDetailsComponent},
  {path: 'album-list', component: AlbumListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
