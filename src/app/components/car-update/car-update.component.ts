import {Component, Input, OnInit} from '@angular/core';
import {Car} from "../../models/car";
import {FormBuilder, FormGroup} from "@angular/forms";
import {CarServiceService} from "../../services/car-service.service";
import {ActivatedRoute, Router} from "@angular/router";
import {CreateCar} from "../../models/create-car";
import {Location} from "@angular/common";

@Component({
  selector: 'app-car-update',
  templateUrl: './car-update.component.html',
  styleUrls: ['./car-update.component.css']
})
export class CarUpdateComponent implements OnInit {

  submitted: boolean = false;

  @Input("carParam")
  car! : Car;

  createCarForm: FormGroup = this.fb.group({
    title: '',
    address: '',
    brand: '',
    model: '',
    model_year: '',
    issuance: '',
    mileage: '',
    fuel: '',
    color: '',
    numbers_doors: '',
    horse_power: '',
    price: '',
    pictures: [],
    sold: ''
  });

  constructor(private carService: CarServiceService,
              private fb: FormBuilder,
              private router: Router,
              private route: ActivatedRoute,
              private location: Location) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.carService.getCar(id)
      .subscribe(car => this.car = car);
    this.createCarForm.get('title')?.setValue(this.car.title)

  }

  onSubmit() {
    this.submitted = true;

    if (this.createCarForm.invalid) {
      return;
    }


    let car: Car = {
      id: this.car.id,
      title: this.createCarForm.value.title,
      address: this.createCarForm.value.address,
      brand: this.createCarForm.value.brand,
      model: this.createCarForm.value.model,
      model_year: this.createCarForm.value.model_year,
      issuance: this.createCarForm.value.issuance,
      mileage: this.createCarForm.value.mileage,
      fuel: this.createCarForm.value.fuel,
      color: this.createCarForm.value.color,
      numbers_doors: this.createCarForm.value.numbers_doors,
      horse_power: this.createCarForm.value.horse_power,
      price: this.createCarForm.value.price,
      pictures: [this.createCarForm.value.pictures],
      sold: this.createCarForm.value.sold
    };

    this.carService.update(this.car.id, car);
    this.router.navigate(['/cars']);


  }

  get f() {
    return this.createCarForm.controls;
  }

}
