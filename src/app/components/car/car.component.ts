import {Component, Input, OnInit, Output} from '@angular/core';
import {Car} from "../../models/car";
import {EventEmitter} from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  @Input("carParam")
  car!:Car;
  @Output()
  carInfo = new EventEmitter();
  carDelete = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  sendInfo(){
    this.carInfo.emit(this.car);
  }


}
