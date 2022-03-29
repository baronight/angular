import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// guard
import { LoggedInGuard } from './guards/logged-in.guard';

import { ArticleComponent } from './components/article/article.component';
import { DogListComponent } from './components/dog/dog-list/dog-list.component';
import { ShibaComponent } from './components/dog/shiba/shiba.component';
import { HelloWorldComponent } from './components/hello-world/hello-world.component';
import { SimpleHttpComponent } from './components/simple-http/simple-http.component';
import { UserComponent } from './components/user/user.component';
import { YouTubeSearchComponent } from './components/you-tube/you-tube-search/you-tube-search.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { HomeComponent } from './pages/home/home.component';
import { AlbumComponent as MusicAlbumComponent } from './pages/music/album/album.component';
import { ArtistComponent as MusicArtistComponent } from './pages/music/artist/artist.component';
import { TrackComponent as MusicTrackComponent } from './pages/music/track/track.component';
import { SearchComponent as MusicSearchComponent } from './pages/music/search/search.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { LoginComponent } from './pages/login/login.component';
import { ProtectedComponent } from './pages/protected/protected.component';
import { ProductComponent as ProductPageComponent } from "./pages/product/product.component";
import { ProductComponent } from './components/product';

const routes: Routes = [
  { path: "", redirectTo: "/articles", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "contact", component: ContactUsComponent },
  { path: "login", component: LoginComponent },
  { 
    path: "protected",
    component: ProtectedComponent,
    canActivate: [LoggedInGuard],
    canLoad: [LoggedInGuard],
    runGuardsAndResolvers: "always",
  },
  { path: "articles", component: ArticleComponent },
  // { path: "products", component: ProductComponent },
  // { path: "products/:id", component: ProductComponent },
  {
    path: "products",
    component: ProductPageComponent,
    children: [
      {
        path: "", redirectTo: "main", pathMatch: "full"
      },
      { path: "main", component: ProductComponent },
      { path: "more-info", component: ProductComponent },
      { path: ":id", component: ProductComponent }, 
    ]
  },
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
      {
        path: "dog", component: DogListComponent,
      },
      {
        path: "shiba", component: ShibaComponent,
      }
    ]
  },
  {
    path: "music",
    children: [
      {
        path: "search", component: MusicSearchComponent,
      },
      {
        path: "artists/:id", component: MusicArtistComponent,
      },
      {
        path: "albums/:id", component: MusicAlbumComponent,
      },
      {
        path: "tracks/:id", component: MusicTrackComponent,
      },

    ],
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
