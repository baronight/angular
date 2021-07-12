import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PriceService {

  constructor() { }

  public calculateTotalPrice(basePrice: number, state: string): number {
    const tax = Math.random();
    return basePrice + tax;
  }
}
