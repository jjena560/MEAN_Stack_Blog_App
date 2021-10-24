import { Component, OnInit } from '@angular/core';
import { Blog } from 'src/app/Blog';
import { blogs } from 'src/constant';

@Component({
  selector: 'app-all-blogs',
  templateUrl: './all-blogs.component.html',
  styleUrls: ['./all-blogs.component.css']
})
export class AllBlogsComponent implements OnInit {
  articles: Blog[];


  constructor() {
  }

  ngOnInit(): void {
    console.log(blogs);
    this.articles = blogs.blogs;
    console.log(this.articles)


  }

  deleteBlog(article: any) {
    console.log(article);
    const index = this.articles.indexOf(article);
    this.articles.splice(index, 1);
    localStorage.setItem("articles", JSON.stringify(this.articles));
  }

  addBlog(article: any) {
    console.log(article);
    this.articles.push(article);
    localStorage.setItem("articles", JSON.stringify(this.articles));
  }

}
