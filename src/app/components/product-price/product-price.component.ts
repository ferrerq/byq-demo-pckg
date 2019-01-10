import { Product, SharedServiceService } from './../../shared/shared-service.service';
import { Subscription } from 'rxjs/Subscription';
import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-product-price',
  templateUrl: './product-price.component.html',
  styleUrls: ['./product-price.component.scss']
})
export class ProductPriceComponent implements OnInit {

  public selectedProductSubscription: Subscription;
  public selectedProduct: Product;

  constructor(private _sharedService: SharedServiceService) {

    this.selectedProductSubscription = this._sharedService.selectedProduct$.subscribe(
      newSelectedProduct => {
        this.selectedProduct =  _.cloneDeep(newSelectedProduct);
      });
  }



  ngOnInit() {
  }

  public ChangePrice() {
    this._sharedService.ChangePrice( _.cloneDeep(this.selectedProduct));
  }
}
