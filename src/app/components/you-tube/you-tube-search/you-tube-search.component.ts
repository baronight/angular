import { Component, OnInit } from '@angular/core';
import { SearchResult } from 'src/app/models/search-result.model';

@Component({
  selector: 'app-you-tube-search',
  templateUrl: './you-tube-search.component.html',
  styleUrls: ['./you-tube-search.component.scss']
})
export class YouTubeSearchComponent implements OnInit {
  results: SearchResult[] = [];
  loading: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  updateResults(results: SearchResult[]): void {
    this.results = results;
    // console.log('results', this.results);
  }
}
