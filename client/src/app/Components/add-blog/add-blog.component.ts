import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Blog } from 'src/app/Blog';
// import { Blog } from 'src/app/blog';
import { blogs } from 'src/constant';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css']
})
export class AddBlogComponent implements OnInit {
  title: string;
  desc: string;
  image: any;
  likes: any;
  createdAt: any;
  articles: any;
  @Output() blogAdd: EventEmitter<Blog> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit() {
    const blog = {
      title: this.title,
      desc: this.desc,
      image: this.image,
      createdAt: this.createdAt,
      likes: this.likes
    }

    console.log("added", blog);
    this.blogAdd.emit(blog);

  }

}
