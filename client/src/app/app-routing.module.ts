import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBlogComponent } from './Components/add-blog/add-blog.component';
import { AllBlogsComponent } from './Components/all-blogs/all-blogs.component';
import { BlogItemComponent } from './Components/blog-item/blog-item.component';
import { HomeComponent } from './Components/home/home.component';
import { PlayersComponent } from './Components/players/players.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent // Default Route
  },

  {
    path: 'blog',
    component: BlogItemComponent // Default Route
  },

  {
    path: 'blogs',
    component: AllBlogsComponent // Default Route
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
