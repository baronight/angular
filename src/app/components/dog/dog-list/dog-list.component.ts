import { Component, OnInit } from '@angular/core';
import { DogBreedListResult, DogBreedResult } from 'src/app/models/dog.model';
import { DogService } from 'src/app/services/dog.service';

@Component({
  selector: 'app-dog-list',
  templateUrl: './dog-list.component.html',
  styleUrls: ['./dog-list.component.scss']
})
export class DogListComponent implements OnInit {
  _breeds: DogBreedResult[] = [];
  _message: string = "";

  ddlBreed: any = "";
  ddlSubBreed: any = "";

  constructor(
    private dogSvc: DogService,
  ) { }

  ngOnInit(): void {
    this.dogSvc.getAllBreeds().subscribe(
      (result: DogBreedListResult | null) => {
        this._breeds = (<DogBreedListResult>(result || [])).breeds;
      },
      (err: any) => {
        console.log(err);
        this._message = "error";
      },
      () => {
      },
    )
  }

}
