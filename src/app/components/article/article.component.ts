import { Component, HostBinding, OnInit } from '@angular/core';
import { Article } from "../../models";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  articles: Article[];

  constructor() {
    this.articles = [
      new Article("Angular", "https://angular.io", 3),
      new Article("Fullstack", "https://fullstack.io", 2),
      new Article("Angular Homepage", "https://angular.io", 1),
    ];
  }

  sortedVoteArticles(): Article[] {
    return this.articles.sort((a,b) => b.votes - a.votes);
  }

  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    console.log(`Adding article title: ${title.value} link: ${link.value}`);
    if (title.value && link.value) {
      this.articles.push(new Article(title.value, link.value));
      title.value = "";
      link.value = "";
    }
    return false;
  }

  ngOnInit(): void {
  }

}
