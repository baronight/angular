import { Component, OnInit, Output, EventEmitter, ElementRef } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime, filter, map, switchMap, tap } from 'rxjs/operators';
import { SearchResult } from 'src/app/models/search-result.model';
import { YouTubeSearchService } from 'src/app/services/you-tube-search.service';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit {
  @Output() loading: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() results: EventEmitter<SearchResult[]> = new EventEmitter<SearchResult[]>();

  constructor(
    private youtube: YouTubeSearchService,
    private el: ElementRef,
  ) { }

  ngOnInit(): void {
    // convert the `keyup` event into an observable stream
    fromEvent(this.el.nativeElement, 'keyup')
      .pipe(
        map((e: any) => e.target.value), // extract the value of the input
        filter((text: string) => text.length > 1), // filter out if empty
        debounceTime(250), // only once every 250ms
        tap(() => this.loading.emit(true)), // enable loading
        // search, discarding old events if new input comes in
        map((query: string) => this.youtube.search(query)),
        switchMap((results) => results)
      )
      // act on the return of search
      .subscribe(
        (results: SearchResult[]) => { // on success
          this.loading.emit(false);
          this.results.emit(results);
        },
        (err: any) => { // on error
          console.log(err);
          this.loading.emit(false);
        },
        () => { // on completion
          this.loading.emit(false);
        }
      )
  }

}
