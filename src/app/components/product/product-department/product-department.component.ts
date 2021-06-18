import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models';

@Component({
  selector: 'product-department',
  templateUrl: './product-department.component.html',
  styleUrls: ['./product-department.component.scss']
})
export class ProductDepartmentComponent implements OnInit {
  @Input() product: Product | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
