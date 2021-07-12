import { Injectable } from '@angular/core';
import {
  Metric,
  AnalyticsImplementation,
} from '../interfaces/analytics.interface';

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {

  constructor(private implementation: AnalyticsImplementation) { }

  record(metric: Metric): void {
    this.implementation.recordEvent(metric);
  }
}
