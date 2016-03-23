import {Component} from 'angular2/core';
import {Keg} from './keg.model';

@Component({
  selector: 'keg-display',
  inputs: ['keg'],
  template:`
  <h2>{{ keg.name }} {{keg.brand}} {{keg.price}}</h2>
  `
})

export class KegComponent {
  public keg: Keg;
}
