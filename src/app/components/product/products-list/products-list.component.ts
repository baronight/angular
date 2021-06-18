import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../../../models';

@Component({
  selector: 'products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductListComponent implements OnInit {
  @Input() productList: Product[] = [];
  @Output() onProductSelected: EventEmitter<Product> = new EventEmitter();

  private currentProduct?: Product;
  constructor() { }

  clicked(product: Product): void {
    this.currentProduct = product;
    this.onProductSelected.emit(product);
  }

  isSelected(product: Product): boolean {
    if (!product || !this.currentProduct) {
      return false;
    }
    return product.sku === this.currentProduct.sku;
  }

  ngOnInit(): void {
  }

}
