
import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Car} from "../../models/car";

import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import {ActivatedRoute, Router} from '@angular/router';
import { Location } from '@angular/common';
import {CarServiceService} from "../../services/car-service.service";


@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {
  @Input("carParam")
  car! : Car;

  @Output("carSelected")
  selectCarEvent : EventEmitter<Car> = new EventEmitter<Car>();

  constructor(private route: ActivatedRoute,
              private carService: CarServiceService,
              private location: Location,
              private router: Router) { }

  ngOnInit(): void {
    this.getCar();
  }

  getCar(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.carService.getCar(id)
      .subscribe(car => this.car = car);
    console.log(this.car.id)
  }

  goBack(): void {
    this.location.back();
  }

  selectCar() {
    this.selectCarEvent.emit(this.car);
  }
  delete(){
    this.carService.delete(this.car.id);
    this.router.navigate(['/cars'])
  }


  paused = false;
  unpauseOnArrow = false;
  pauseOnIndicator = false;
  pauseOnHover = true;
  pauseOnFocus = true;

  @ViewChild('carousel', {static : true}) carousel!: NgbCarousel;

  togglePaused() {
    if (this.paused) {
      this.carousel.cycle();
    } else {
      this.carousel.pause();
    }
    this.paused = !this.paused;
  }

  onSlide(slideEvent: NgbSlideEvent) {
    if (this.unpauseOnArrow && slideEvent.paused &&
      (slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)) {
      this.togglePaused();
    }
    if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
      this.togglePaused();
    }
  }


}
