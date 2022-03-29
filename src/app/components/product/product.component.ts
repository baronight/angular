import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../models';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  products: Product[];
  id: string = "";

  constructor(
    private route: ActivatedRoute
  ) {
    route.params.subscribe(params => {
      this.id = params.id;
    });
    this.products = [
      new Product(
        "MYSHOES",
        "Black Running Shoes",
        "./assets/images/products/black-shoes.jpg",
        ["Men", "Shoes", "Running Shoes"],
        109.99,
      ),
      new Product(
        "NEATOJACKET",
        "Blue Jacket",
        "./assets/images/products/blue-jacket.jpg",
        ["Women", "Apparel", "Jackets & Vests"],
        238.99,
      ),
      new Product(
        "NICEHAT",
        "A Nice Black Hat",
        "./assets/images/products/black-hat.jpg",
        ["Men", "Accessories", "Hats"],
        29.99,
      ),
    ];
  }

  productWasSelected(product: Product): void {
    console.log(`Product clicked: `, product);
  }
  
  ngOnInit(): void {
  }

  goToProduct(id: any) {

  }
}
