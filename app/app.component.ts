import { Component, EventEmitter } from 'angular2/core';
import { KegListComponent } from './keg-list.component';
import { Keg } from './keg.model';


@Component({
  selector: 'my-app',
  directives: [KegListComponent],
  template: `
    <div class="container">
      <h1>Tap Room</h1>
     <keg-list
      [kegList]="kegs"
      (onKegSelect)="kegWasSelected($event)">
     </keg-list>
    </div>
  `
})

export class AppComponent {
  public kegs: Keg[];
  constructor(){
    this.kegs = [
      new Keg("BudLight", "Budweiser", 90, 5,0),
      new Keg("Coors", "Coors", 90, 5, 1),
      new Keg("Dead Guy", "Rogue", 150, 9, 2)
    ];
  }
  kegWasSelected(clickedKeg: Keg): void {
    console.log(clickedKeg);
  }
}
