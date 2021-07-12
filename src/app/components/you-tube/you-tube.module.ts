import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBoxComponent } from './search-box/search-box.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { YouTubeSearchComponent } from './you-tube-search/you-tube-search.component';
import { youTubeSearchInjectable } from 'src/app/injectors/you-tube-search.injectables';



@NgModule({
  declarations: [
    SearchBoxComponent,
    SearchResultComponent,
    YouTubeSearchComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    youTubeSearchInjectable,
  ]
})
export class YouTubeModule { }
