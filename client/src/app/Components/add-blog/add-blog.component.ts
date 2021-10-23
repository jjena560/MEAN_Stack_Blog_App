import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Blog } from 'src/app/blog';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css']
})
export class AddBlogComponent implements OnInit {
  title: string;
  desc: string;
  image: Blob;
  blogs: Blog[];
  @Output() blogAdd: EventEmitter<Blog> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit() {
    const blog = {
      title: this.title,
      desc: this.desc,
      image: this.image,
    }
    this.blogAdd.emit(blog);

  }

}
