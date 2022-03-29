import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.scss']
})
export class TrackComponent implements OnInit {

  track: any | null = null;
  id: string | null = null;

  constructor(
    private spotifySvc: SpotifyService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params) => {
        this.id = params.id;
        if (this.id) {
          this.spotifySvc
            .getTrack(this.id)
            .subscribe(
              (res) => {
                this.renderTrack(res);
              },
              (error) => {
                console.error(error);
              }
            )
        }
      }
    )
  }

  renderTrack(res: any) {
    console.log(res);
    this.track = null;
    if (res && res.album) {
      this.track = res;
    }
  }

  back(): void {
    this.location.back();
  }

}
