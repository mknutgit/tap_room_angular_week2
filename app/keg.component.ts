import {Component} from 'angular2/core';
import {Keg} from './keg.model';

@Component({
  selector: 'keg-display',
  inputs: ['keg'],
  template:`
  <h4>Name: {{ keg.name }} </h4>
  <h4>Brand: {{ keg.brand }} </h4>
  <h4>Price: {{ keg.price }} </h4>
  <h4>ABV: {{ keg.abv }} </h4>
  <h4>Pints Remaining: {{ keg.pintsRemaining }} </h4>
  <button type="submit" (click)="sellPint()" name="button">Subtract Pint</button>
  <br>
  <hr>
  `
})

export class KegComponent {
  public keg: Keg;
  sellPint() {
    this.keg.pintsRemaining = this.keg.pintsRemaining - 1;
  }
}
