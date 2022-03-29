import { Component, OnInit } from '@angular/core';
import { SpotifyService } from "../../../services/spotify.service";

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {

  constructor(
    private spotifySvc: SpotifyService,
  ) { }

  ngOnInit(): void {

    this.spotifySvc.searchTrack("โปเตโต้").subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        console.error(error);
      }
    )
  }

}
