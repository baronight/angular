import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'price-display',
  templateUrl: './price-display.component.html',
  styleUrls: ['./price-display.component.scss']
})
export class PriceDisplayComponent implements OnInit {
  @Input() price: number | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
