import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CarsComponent} from "./components/cars/cars.component";
import {CarDetailComponent} from "./components/car-detail/car-detail.component";
import {CreateCarComponent} from "./components/create-car/create-car.component";
import {CarUpdateComponent} from "./components/car-update/car-update.component";

const routes: Routes = [
  {path:'cars',component:CarsComponent},
  {path:'detail/:id',component:CarDetailComponent},
  {path:'create-car',component:CreateCarComponent},
  {path:'update/:id',component:CarUpdateComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
