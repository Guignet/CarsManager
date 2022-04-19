import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {Car} from "../models/car";
import {CreateCar} from "../models/create-car";

@Injectable({
  providedIn: 'root'
})
export class CarServiceService {
  constructor(private http: HttpClient) {}
  private carslist: Car[] = [];
  private BASE_URL = "http://localhost:3000";
  private httpOptions = {
    headers: new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    })
  };

  fetchAll():Observable<Car[]>{
    return this.http.get<Car[]>(`${this.BASE_URL}/cars`);
  }

  create(car: CreateCar): Observable<Car[]> {
    return this.http.post<Car[]>(`${this.BASE_URL}/cars`, car, this.httpOptions);
  }

  getCar(id:number): Observable<Car>{
    return this.http.get<Car>(`${this.BASE_URL}/cars/${id}`);
  }
  delete(id:number):Observable<Car>{
    return this.http.delete<Car>(`${this.BASE_URL}/cars/${id}`)
  }




}
