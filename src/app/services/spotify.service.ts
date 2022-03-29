import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map, switchMap } from 'rxjs/operators';
import { from, Observable } from 'rxjs';
import moment from "moment-timezone"
moment.tz("Asia/Bangkok");

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  private _token: string = "";
  private _expireToken: Date | null = null;
  baseURLAPI: string = "https://api.spotify.com/v1";

  constructor(
    private http: HttpClient,
    @Inject("SPOTIFY_CLIENT_ID") private clientId: string,
    @Inject("SPOTIFY_CLIENT_SECRET") private clientSecret: string,
  ) { }

  async getToken(): Promise<void> {
    if (this._token 
      && (this._expireToken && moment().diff(moment(this._expireToken), "minute") < 40)) {
        return;
    }
    let auth = btoa(`${this.clientId}:${this.clientSecret}`);
    let params = new URLSearchParams();
    params.append("grant_type", "client_credentials");
    let result = await this.http.post(
      "https://accounts.spotify.com/api/token", 
      params.toString(), 
      {
        headers: {
          ["content-type"]: "application/x-www-form-urlencoded",
          authorization: `Basic ${auth}`
        }
      }
    )
    .pipe(
      map((response: any) => {
        return response;
      })
    ).toPromise();

    this._token = result.access_token;
    this._expireToken = moment().add(result.expires_in, "second").toDate();
  }

  printToken(): void {
    console.log(this._token);
  }

  query(URL: string, params?: Array<string>): Observable<any> {
    let queryUrl = `${this.baseURLAPI}${URL}`;
    if (params) {
      queryUrl = `${queryUrl}?${params.join("&")}`
    }
    return from(this.getToken())
      .pipe(
        switchMap((data) => {
          return this.http.get(
            queryUrl,
            {
              headers: {
                authorization: `Bearer ${this._token}`,
              }
            }
          )
        }),
      )
  }

  search(query: string, type: string): Observable<any> {
    return this.query(`/search`, [`q=${query}`, `type=${type}`]);
  }

  searchTrack(query: string) {
    return this.search(query, "track");
  }
  
  getTrack(id: string): Observable<any> {
    return this.query(`/tracks/${id}`);
  }
}
