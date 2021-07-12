import { IPriceService } from '../interfaces/price-service.interface';

export class Product {
  private service: IPriceService;
  public basePrice: number;

  constructor(service: IPriceService, basePrice: number) {
    this.basePrice = basePrice;
    this.service = service;
  }

  public totalPrice(state: string): number {
    return this.service.calculateTotalPrice(this.basePrice, state);
  }
}
