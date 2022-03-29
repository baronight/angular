import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from "@angular/common/http";

@Component({
  selector: 'app-simple-http',
  templateUrl: './simple-http.component.html',
  styleUrls: ['./simple-http.component.scss']
})
export class SimpleHttpComponent implements OnInit {
  data: Object | null = null;
  loading: boolean = false;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  makeRequest(): void {
    this.loading = true;
    this.http
      .get('https://jsonplaceholder.typicode.com/posts/1')
      .subscribe(data => {
        this.data = data;
        this.loading = false;
      });
  }

  makePost(): void {
    this.loading = true;
    this.http
      .post(
        "https://jsonplaceholder.typicode.com/posts",
        {
          body: "bar",
          title: "foo",
          userId: 1,
        },
      )
      .subscribe(data => {
        this.data = data;
        this.loading = false;
      });
  }

  makeDelete(): void {
    this.loading = true;
    this.http
      .delete(
        "https://jsonplaceholder.typicode.com/posts/1",
      )
      .subscribe(data => {
        this.data = data;
        this.loading = false;
      });
  }

  makeHeaders(): void {
    const headers = new HttpHeaders({
      "X-API-TOKEN": "ng-book",
    });

    const req = new HttpRequest(
      "GET",
      "https://jsonplaceholder.typicode.com/posts/1",
      {
        headers,
      },
    );

    this.http.request(req).subscribe((data: any) => {
      this.data = data["body"];
    })
  }
}
