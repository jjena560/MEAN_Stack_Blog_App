import { Component, OnInit } from '@angular/core';
import { Blog } from 'src/app/Blog';
// import { blogs } from 'Blogs.js';
import { blogs } from 'src/constant';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  localItem: string;
  blogs: Blog[];
  constructor() {
    this.localItem = localStorage.getItem("blog") || '{}';
    if (this.localItem == null) {
      this.blogs = [];
    }
    else {
      this.blogs = JSON.parse(this.localItem);
    }

  }

  ngOnInit(): void {
  }

  deleteBlog(Blog: Blog) {
    console.log(Blog);
    const index = this.blogs.indexOf(Blog);
    this.blogs.splice(index, 1);
    localStorage.setItem("blog", JSON.stringify(this.blogs));
  }

  addBlog(Blog: Blog) {
    console.log(Blog);
    this.blogs.push(Blog);
    localStorage.setItem("blog", JSON.stringify(this.blogs));
  }
}