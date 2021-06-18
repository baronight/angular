import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models';

@Component({
  selector: 'product-image',
  templateUrl: './product-image.component.html',
  styleUrls: ['./product-image.component.scss']
})
export class ProductImageComponent implements OnInit {
  @Input() product: Product | undefined;
  @HostBinding('attr.class') cssClass = 'small image';
  constructor() { }

  ngOnInit(): void {
  }

}
