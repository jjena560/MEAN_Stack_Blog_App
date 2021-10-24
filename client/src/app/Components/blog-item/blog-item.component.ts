import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Blog } from 'src/app/Blog';

@Component({
  selector: 'app-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.css']
})
export class BlogItemComponent implements OnInit {
  @Input() blog: Blog;
  @Input() i: number;
  @Output() blogDelete: EventEmitter<Blog> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    console.log(this.blog);
  }
  onClick(blog: Blog) {
    this.blogDelete.emit(blog);
    console.log("onClick has been triggerd")
  }

}
