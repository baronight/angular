import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { Article } from "../../../models";

@Component({
  selector: 'app-article-item',
  templateUrl: './article-item.component.html',
  styleUrls: ['./article-item.component.scss']
})
export class ArticleItemComponent implements OnInit {
  @HostBinding('attr.class') cssClass = "row  justify-content-md-center mb-4";
  @Input() article: Article;
  // votes: number;
  // title: string;
  // link: string;
  
  constructor() {
    // this.title = "Angular";
    // this.link = "https://angular.io";
    // this.votes = 10;
    this.article = new Article("Angular", "https://angular.io", 10);
  }

  voteUp(): boolean {
    this.article.voteUp();
    return false;
  }

  voteDown(): boolean {
    this.article.voteDown();
    return false;
  }

  ngOnInit(): void {
  }

}
