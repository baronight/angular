import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

// bootstrap
import { AccordionModule } from "ngx-bootstrap/accordion";
import { AlertModule } from "ngx-bootstrap/alert";
import { ButtonsModule } from "ngx-bootstrap/buttons";
import { CarouselModule } from "ngx-bootstrap/carousel";
import { CollapseModule } from "ngx-bootstrap/collapse";
import { BsDatepickerModule } from "ngx-bootstrap/datepicker";
import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { ModalModule } from "ngx-bootstrap/modal";
import { PaginationModule } from "ngx-bootstrap/pagination";
import { PopoverModule } from "ngx-bootstrap/popover";
import { ProgressbarModule } from "ngx-bootstrap/progressbar";
import { RatingModule } from "ngx-bootstrap/rating";
import { SortableModule } from "ngx-bootstrap/sortable";
import { TabsModule } from "ngx-bootstrap/tabs";
import { TimepickerModule } from "ngx-bootstrap/timepicker";
import { TooltipModule } from "ngx-bootstrap/tooltip";
import { TypeaheadModule } from "ngx-bootstrap/typeahead";

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// module
import { ArticleModule } from "./components/article/article.module";
import { ProductModule } from "./components/product";
import { HelloWorldComponent } from './components/hello-world/hello-world.component';
import { UserItemComponent } from './components/user-item/user-item.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserModule } from './components/user/user.module';
import { HttpClientModule } from '@angular/common/http';
import { SimpleHttpComponent } from './components/simple-http/simple-http.component';
import { youTubeSearchInjectable } from "./injectors/you-tube-search.injectables";
import { YouTubeModule } from './components/you-tube/you-tube.module';
import { DogModule } from "./components/dog/dog.module";
import { APP_BASE_HREF, HashLocationStrategy, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { LoginComponent } from './pages/login/login.component';
import { ProtectedComponent } from './pages/protected/protected.component';
import { ArtistComponent as MusicArtistComponent } from './pages/music/artist/artist.component';
import { AlbumComponent as MusicAlbumComponent } from './pages/music/album/album.component';
import { TrackComponent as MusicTrackComponent } from './pages/music/track/track.component';
import { spotifyAPIInjectable } from './injectors/spotify-api.injectables';
import { SearchComponent as MusicSearchComponent } from './pages/music/search/search.component';
import { AuthService } from './services/auth.service';
import { GuardsModule } from './guards/guards.module';
import { ProductComponent } from './pages/product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    UserItemComponent,
    UserListComponent,
    PageNotFoundComponent,
    SimpleHttpComponent,
    HomeComponent,
    AboutComponent,
    ContactUsComponent,
    LoginComponent,
    ProtectedComponent,
    MusicArtistComponent,
    MusicAlbumComponent,
    MusicTrackComponent,
    MusicSearchComponent,
    ProductComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

    // bootstrap
    AccordionModule.forRoot(),
    AlertModule.forRoot(),
    ButtonsModule.forRoot(),
    CarouselModule.forRoot(),
    CollapseModule.forRoot(),
    BsDatepickerModule.forRoot(),
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    PaginationModule.forRoot(),
    PopoverModule.forRoot(),
    ProgressbarModule.forRoot(),
    RatingModule.forRoot(),
    SortableModule.forRoot(),
    TabsModule.forRoot(),
    TimepickerModule.forRoot(),
    TooltipModule.forRoot(),
    TypeaheadModule.forRoot(),
    FontAwesomeModule,

    //module
    ArticleModule,
    ProductModule,
    UserModule,
    YouTubeModule,
    DogModule,

    GuardsModule,
  ],
  providers: [
    youTubeSearchInjectable,
    spotifyAPIInjectable,
    AuthService,
    // {
    //   provide: LocationStrategy,
    //   useClass: HashLocationStrategy,
    // },
    {
      provide: APP_BASE_HREF,
      useValue: "/"
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
