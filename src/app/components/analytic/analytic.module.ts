import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnalyticsService } from 'src/app/services/analytics.service';
import { AnalyticsImplementation, Metric } from 'src/app/interfaces/analytics.interface';

import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: "API_URL", useValue: "http://devserver.com",
    },
    {
      // `AnalyticsService` is the _token_ we use to inject
      // note, the token is the class, but it's just used as an indentifier!
      provide: AnalyticsService,

      // add our `deps` to specify the factory depencies
      deps: [
        HttpClient,
        "API_URL",
      ],
      
      // useFactory is a function - whatever is returned from this function
      // will be injected.
      useFactory(http: HttpClient, apiUrl: string) {
        // create an implementation that will log the event
        const loggingImplementation: AnalyticsImplementation = {
          recordEvent: (metric: Metric): void => {
            console.log('The metric is', metric);
            console.log('Sending to ', apiUrl);
          }
        }

        // create our new `AnalyticsService` with the implementation
        return new AnalyticsService(loggingImplementation);
      }
    }
  ]
})
export class AnalyticModule { }
