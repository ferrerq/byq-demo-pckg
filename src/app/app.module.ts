import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';



import { AppComponent } from './app.component';
import { ListProductComponent } from './components/list-product/list-product.component';
import { TotalPriceComponent } from './components/total-price/total-price.component';
import { ProductPriceComponent } from './components/product-price/product-price.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    ListProductComponent,
    TotalPriceComponent,
    ProductPriceComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
