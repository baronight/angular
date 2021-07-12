import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

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
}
