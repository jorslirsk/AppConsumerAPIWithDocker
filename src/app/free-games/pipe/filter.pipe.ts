import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const result = [];
    for (const element of value) {
      switch (true) {
        case element.hasOwnProperty("title"): {
          if (element.title.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
            result.push(element);
          }
          break;
        }

      }
    }
    return result;
  }

}
