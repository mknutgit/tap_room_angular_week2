import {Pipe, PipeTransform} from 'angular2/core';
import {Keg} from "./keg.model";

@Pipe({
  name: "sell",
  pure: false
})
export class SellPint implements PipeTransform {
  transform(input: Keg[], args) {
    var currentPints = args[0];
  }
}
