import { SharedServiceService, Product } from './../../shared/shared-service.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  public selectedProduct: Product;
  public selectedProductSubscription: Subscription;

  constructor(private _sharedService: SharedServiceService) {

    this.selectedProductSubscription = this._sharedService.selectedProduct$.subscribe(
      newSelectedProduct => {
        this.selectedProduct = newSelectedProduct;
      });
    }

  ngOnInit() {
  }

}
