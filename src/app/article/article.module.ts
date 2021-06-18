import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticleComponent } from './article.component';
import { ArticleItemComponent } from './article-item/article-item.component';


@NgModule({
  declarations: [
    ArticleComponent,
    ArticleItemComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ArticleComponent,
  ]
})
export class ArticleModule { }
