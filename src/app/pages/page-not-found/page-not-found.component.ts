import { Component, OnInit } from '@angular/core';
import { faAngular } from "@fortawesome/free-brands-svg-icons"

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {
  faAngular = faAngular;
  
  constructor() { }

  ngOnInit(): void {
  }

}
