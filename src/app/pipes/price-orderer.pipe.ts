import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priceOrderer'
})
export class PriceOrdererPipe implements PipeTransform {

  transform(cars: any, order: string): any[] {
    if(order === 'DESC'){
      return cars.sort((a:any,b:any) => b.price - a.price);
    }else{
      return cars.sort((a:any,b:any) => a.price - b.price);
    }
  }

}
