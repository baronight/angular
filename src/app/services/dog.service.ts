import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { map } from 'rxjs/operators';
import { DogBreedListResult, DogImageResult } from '../models/dog.model';

@Injectable({
  providedIn: 'root'
})
export class DogService {
  _baseUrl: string = "https://dog.ceo/api";
  constructor(private http: HttpClient) { }

  getAllBreeds() {
    const url = `${this._baseUrl}/breeds/list/all`;
    return this.http.get(url)
      .pipe(
        map((response: any) => {
          if (response["status"] === "success") {
            return new DogBreedListResult(response["message"]);
          } else {
            return null;
          }
        }),
      );
  }

  getImageByBreed(breed: string, subBreed?: string) {
    const url =  `${this._baseUrl}/breed/${breed}${subBreed ? `/${subBreed}` : ""}/images`;
    return this.http.get(url)
      .pipe(
        map((response: any) => {
          if (response["status"] === "success") {
            return <DogImageResult[]>response["message"].map((url: string) => {
              return new DogImageResult(url);
            });
          } else {
            return null;
          }
        }),
      );
  }

  randomDogImageByBreed(breed: string, subBreed?: string, limit?: number) {
    const url =  `${this._baseUrl}/breed/${breed}${subBreed ? `/${subBreed}` : ""}/images/random${limit ? `/${limit}` : ""}`;
    return this.http.get(url)
      .pipe(
        map((response: any) => {
          if (response["status"] === "success") {
            let message: string | string[] = response["message"];
            if (Array.isArray(message)) {
              return <DogImageResult[]>message.map((url: string) => {
                return new DogImageResult(url);
              })
            } else {
              return <DogImageResult[]>[
                new DogImageResult(message),
              ]
            }
          } else {
            return null;
          }
        }),
      );
  }

  randomDogImage(limit?: number) {
    const url = `${this._baseUrl}/breeds/image/random${limit ? `/${limit}` : ""}`;
    return this.http.get(url)
      .pipe(
        map((response: any) => {
          if (response["status"] === "success") {
            let message: string | string[] = response["message"];
            if (Array.isArray(message)) {
              return <DogImageResult[]>message.map((url: string) => {
                return new DogImageResult(url);
              })
            } else {
              return <DogImageResult[]>[
                new DogImageResult(message),
              ]
            }
          } else {
            return null;
          }
        }),
      );
  }
}
