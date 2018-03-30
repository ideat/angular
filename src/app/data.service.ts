import { Injectable } from '@angular/core';
import {PlaceLocation} from './logic/PlaceLocation';
import {Coffee} from './logic/Coffee';

@Injectable()
export class DataService {

  constructor() { }

  getList(callback) {
    /*TODO: Change it with a real webservice*/
    const list = [
      new Coffee('Double Espresso', 'Sunny Cafe', new PlaceLocation('123 Maket st', 'San Francisco')),
      new Coffee( 'Caramel Americano', 'Starcoffee', new PlaceLocation('Gran via 34', 'Madrid'))
    ];
    callback(list);
  }

  save(coffee, callback) {
    /*TODO: Change it with a real webservice*/
    callback(true);
  }
}
