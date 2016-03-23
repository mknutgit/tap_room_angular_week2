import { Component, EventEmitter } from 'angular2/core';
import { Keg } from './keg.model';

@Component({
  selector: 'my-app',
  template: `
    <div class="container">
      <h1>Inventory</h1>
      <keg-list
      [kegList]="kegs"
      (onTaskSelect)="kegWasSelected($event)">
      </keg-list>
    </div>
  `
})
export class AppComponent {
  public kegs: Keg[];
  constructor() {
    this.kegs = [
      new Keg("BudLight", "Budweiser", 90, 0),
      new Keg("Coors", "Coors", 90, 1),
      new Keg("Dead Guy", "Rogue", 150, 2)
    ];
  }
  kegWasSelected(clickedKeg: Keg): void {
    console.log('parent', clickedKeg);
  }
}
