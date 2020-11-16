import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'rangeArrayCreator'
})
export class RangeArrayCreatorPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const array = [];
    for (let i = value.start; i <= value.end; i++) {
      array.push(i);
    }
    return array;
  }

}
