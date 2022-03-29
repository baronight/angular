import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  query: string = "";
  results: any[] | null = null;

  constructor(
    private spotifySvc: SpotifyService,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.route.queryParams.subscribe(params => {
      this.query = params.query || "";
    });
  }

  ngOnInit(): void {
    this.search();
  }

  search(): void {
    console.log("this.query", this.query);
    if (!this.query) {
      return;
    }

    this.spotifySvc.searchTrack(this.query)
      .subscribe(
        (res: any) => this.renderResults(res),
        (error: any) => console.error(error),
      );
  }

  renderResults(res: any): void {
    this.results = null;
    if (res && res.tracks && res.tracks.items) {
      this.results = res.tracks.items;
    }
  }

  submit(query: string): void {
    this.router.navigate(["music", "search"], { queryParams: { query }})
      .then(_ => this.search());
  }
}
