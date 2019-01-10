import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';


export class Product {
  public id: number;
  public title: string;
  public price: number;
}


@Injectable()
export class SharedServiceService {

  private products: Product[] = [];

  // Observable source
  private priceSource = new Subject<Product>();
  private totalPriceSource = new Subject<number>();
  private selectedProduct = new Subject<Product>();

  // Observable stream
  priceSource$ = this.priceSource.asObservable();
  totalPriceSource$ = this.totalPriceSource.asObservable();
  selectedProduct$ = this.selectedProduct.asObservable();


  constructor() {
    this.products.push({
      id: 1,
      title: 'product 1',
      price: 10
    },
      {
        id: 2,
        title: 'product 2',
        price: 0
      },
      {
        id: 3,
        title: 'product 3',
        price: 0
      });

      this.ChangeTotalPrice(this.products);
      this.ProductChanged(this.products[0]);
  }

  // Service message commands
  public ChangePrice(product: Product) {
    this.priceSource.next(product);
  }

  public ChangeTotalPrice(products: Product[]) {
    this.products = products;
    let totalPrice = 0;
    products.forEach((product) => {
      totalPrice += product.price;
    });
    this.totalPriceSource.next(totalPrice);
  }

  public ProductChanged(product: Product) {
    this.selectedProduct.next(product);
  }

  public GetProducts() {
    return this.products;
  }


}
