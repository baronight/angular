import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SearchResult } from '../models/search-result.model';
import { map } from 'rxjs/operators';

/**
 * YouTubeService connects to the YouTube API
 * See: * https://developers.google.com/youtube/v3/docs/search/list
 */

@Injectable({
  providedIn: 'root'
})
export class YouTubeSearchService {

  constructor(
    private http: HttpClient,
    @Inject("YOUTUBE_API_KEY") private apiKey: string,
    @Inject("YOUTUBE_API_URL") private apiUrl: string,
  ) { 

  }

  search(query: string): Observable<SearchResult[]> {
    const params: string = [
      `q=${query}`,
      `key=${this.apiKey}`,
      `part=snippet`,
      `type=video`,
      `maxResult=10`,
    ].join("&");
    const queryUrl = `${this.apiUrl}?${params}`;
    return this.http.get(queryUrl)
      .pipe(
        map((response: any) => {
          return <SearchResult[]>response['items'].map((item: any) => {
            console.log("raw item", item);
            let result = {
              id: item.id.videoId,
              title: item.snippet.title,
              description: item.snippet.description,
              thumbnailUrl: item.snippet.thumbnails.high.url,
            };
            return new SearchResult(result);
          });
        }),
      );
  }
}
