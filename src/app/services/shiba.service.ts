import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from 'rxjs/operators';
import { Shiba } from '../models/shiba.model';

@Injectable({
  providedIn: 'root'
})
export class ShibaService {
  _baseUrl: string = "http://shibe.online/api/shibes";
  constructor(
    private http: HttpClient,
  ) { }

  getImages(count: number = 1) {
    const url = `${this._baseUrl}?count=${count}`
    return this.http.get(url)
      .pipe(
        map((response: any) => {
          return <Shiba[]>response.map((url: string) => {
            return new Shiba(url);
          });
        }),
      );
  }
}
