import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarsComponent } from './components/cars/cars.component';
import {HttpClientModule} from "@angular/common/http";
import { CarComponent } from './components/car/car.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { CreateCarComponent } from './components/create-car/create-car.component';
import { PriceOrdererPipe } from './pipes/price-orderer.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    CarComponent,
    CarDetailComponent,
    CreateCarComponent,
    PriceOrdererPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
