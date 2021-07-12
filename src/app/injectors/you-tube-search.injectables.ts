import { environment } from '../../environments/environment';
import { YouTubeSearchService } from '../services/you-tube-search.service';

export const youTubeSearchInjectable: Array<any> = [
  { provide: YouTubeSearchService, useClass: YouTubeSearchService },
  { provide: "YOUTUBE_API_KEY", useValue: environment.YOUTUBE_API_KEY },
  { provide: "YOUTUBE_API_URL", useValue: environment.YOUTUBE_API_URL },
];