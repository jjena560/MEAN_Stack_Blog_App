import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBlogComponent } from './Components/add-blog/add-blog.component';
import { HomeComponent } from './Components/home/home.component';
import { PlayersComponent } from './Components/players/players.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent // Default Route
  },
  {
    path: 'players',
    component: PlayersComponent // Default Route
  },

  {
    path: 'add-blog',
    component: AddBlogComponent // Default Route
  },
  {
    path: '*',
    component: HomeComponent // Default Route
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
  bootstrap: [],
  providers: [],
  declarations: []
})
export class AppRoutingModule { }
