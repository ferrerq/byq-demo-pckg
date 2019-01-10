import { Subscription } from 'rxjs/Subscription';
import { SharedServiceService } from './../../shared/shared-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-total-price',
  templateUrl: './total-price.component.html',
  styleUrls: ['./total-price.component.scss']
})
export class TotalPriceComponent implements OnInit {
  public totalPrice: number;
  public totalPriceSubscription: Subscription;

  constructor(private _sharedService: SharedServiceService) {

    this.totalPriceSubscription = this._sharedService.totalPriceSource$.subscribe(
      newTotalPrice => {
        this.totalPrice = newTotalPrice;
      });
  }

  ngOnInit() {
  }

}
