import { SharedServiceService, Product } from './shared/shared-service.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SharedServiceService]
})
export class AppComponent {
  title = 'Shared Service';
  constructor(private _sharedService: SharedServiceService) { }



}
