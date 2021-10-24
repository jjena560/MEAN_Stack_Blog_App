import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { HomeComponent } from './Components/home/home.component';
import { AddBlogComponent } from './Components/add-blog/add-blog.component';
import { PlayersComponent } from './Components/players/players.component';
import { EditBlogComponent } from './Components/edit-blog/edit-blog.component';
import { BlogItemComponent } from './Components/blog-item/blog-item.component';
import { AllBlogsComponent } from './Components/all-blogs/all-blogs.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AddBlogComponent,
    PlayersComponent,
    EditBlogComponent,
    BlogItemComponent,
    AllBlogsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
