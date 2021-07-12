import { Product } from './product.model.1';
import { MockPriceService } from '../mocks/price.service.mock';

describe('Product', () => {
  let product: Product;

  beforeEach(() => {
    const service = new MockPriceService();
    product = new Product(service, 11);
  })

  it('should create an instance', () => {
    expect(product).toBeTruthy();
    expect(product.totalPrice('FL')).toBe(11.66);
  });
});
