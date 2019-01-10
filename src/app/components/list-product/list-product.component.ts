import { Subscription } from 'rxjs/Subscription';
import { SharedServiceService } from './../../shared/shared-service.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../../shared/shared-service.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss']
})
export class ListProductComponent implements OnInit {
  public products: Product[] = [];
  public priceProductSubscription: Subscription;

  constructor(private _sharedService: SharedServiceService) {

    this.priceProductSubscription = this._sharedService.priceSource$.subscribe(
      newPrice => {
        this.PriceChange(newPrice);
        this._sharedService.ChangeTotalPrice(this.products);
      });
  }

  ngOnInit() {
    this.products = this._sharedService.GetProducts();

  }

  public ProductChanged(product: Product) {
    this._sharedService.ProductChanged(product);
  }

  public PriceChange(product: Product) {
    const index = this.products.indexOf( _.find(this.products, { 'id' : product.id }));
    this.products[index] = product;
  }
}
