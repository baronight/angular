import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductComponent } from "./product.component";
import { ProductListComponent } from './products-list/products-list.component';
import { ProductRowComponent } from './product-row/product-row.component';
import { ProductImageComponent } from './product-image/product-image.component';
import { ProductDepartmentComponent } from './product-department/product-department.component';
import { PriceDisplayComponent } from './price-display/price-display.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    ProductComponent,
    ProductListComponent,
    ProductRowComponent,
    ProductImageComponent,
    ProductDepartmentComponent,
    PriceDisplayComponent,
  ],
  imports: [
    RouterModule,
    CommonModule
  ]
})
export class ProductModule { }
