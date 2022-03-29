import { environment } from '../../environments/environment';
import { SpotifyService } from "../services/spotify.service";
// import { YouTubeSearchService } from '../services/you-tube-search.service';

export const spotifyAPIInjectable: Array<any> = [
  { provide: SpotifyService, useClass: SpotifyService },
  { provide: "SPOTIFY_CLIENT_ID", useValue: environment.SPOTIFY_CLIENT_ID },
  { provide: "SPOTIFY_CLIENT_SECRET", useValue: environment.SPOTIFY_CLIENT_SECRET },
];