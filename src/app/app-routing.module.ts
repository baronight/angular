import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleComponent } from './components/article/article.component';
import { HelloWorldComponent } from './components/hello-world/hello-world.component';
import { ProductComponent } from './components/product';
import { SimpleHttpComponent } from './components/simple-http/simple-http.component';
import { UserComponent } from './components/user/user.component';
import { YouTubeSearchComponent } from './components/you-tube/you-tube-search/you-tube-search.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: "", redirectTo: "/articles", pathMatch: "full" },
  { path: "articles", component: ArticleComponent },
  { path: "products", component: ProductComponent },
  {
    path: "tests", component: HelloWorldComponent,
  },
  {
    path: "user", component: UserComponent,
  },
  {
    path: "request",
    children: [
      {
        path: "simple", component: SimpleHttpComponent,
      },
      {
        path: "you-tube-search", component: YouTubeSearchComponent,
      },
    ]
  },
  {
    path: "#",
    children: [
      { path: "articles", component: ArticleComponent },
      { path: "products", component: ProductComponent },  
    ]
  },
  {
    path: "**",
    component: PageNotFoundComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
