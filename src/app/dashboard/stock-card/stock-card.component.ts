import { Component, Input, OnInit } from '@angular/core';
import Stock from 'src/app/shared/models/stock-model';

@Component({
  selector: 'app-stock-card',
  templateUrl: './stock-card.component.html',
  styleUrls: ['./stock-card.component.css']
})
export class StockCardComponent implements OnInit {

  @Input()
  stock = new Stock();

  constructor() { }

  ngOnInit(): void {
  }

  get variation(): string  {
    const variation = this.stock.variation;
    const localizedVariationString = variation.toLocaleString();
    const decimal = localizedVariationString.includes(',') ? '' : ',0'
    const prefix = this.stock.variation > 0 ? '+' : '-';
    return `${prefix} ${localizedVariationString.replace('-','')}${decimal}%`;
  }

}
