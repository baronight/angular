import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models';

@Component({
  selector: 'product-row',
  templateUrl: './product-row.component.html',
  styleUrls: ['./product-row.component.scss']
})
export class ProductRowComponent implements OnInit {
  @Input() product: Product | undefined;
  @HostBinding('attr.class') cssClass = 'item mb-4';

  constructor() { }

  ngOnInit(): void {
  }

}
