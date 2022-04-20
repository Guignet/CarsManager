import { Component, OnInit } from '@angular/core';
import {Car} from "../../models/car";
import {CarServiceService} from "../../services/car-service.service";

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  cars: Car[] = [];
  carInfo!:Car;
  constructor(private carService: CarServiceService) { }

  ngOnInit(): void {
    this.carService.fetchAll()
      .subscribe({
        next: cars =>{
          this.cars = cars;
        },
        error: err => {
          console.log(err);
        },
        complete:()=>{
          console.log("completed");
        }
      });
  }

  recupInfo(carInfo: Car){
    this.carInfo = carInfo;
  }



}
