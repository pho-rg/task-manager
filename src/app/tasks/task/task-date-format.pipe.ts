import { Pipe, PipeTransform } from '@angular/core';
import {DatePipe} from "@angular/common";

// Pipe de formatage de la date
@Pipe({
  name: 'taskDateFormat',
  // Architecture standalone
  /*standalone: true*/
})
export class TaskDateFormatPipe implements PipeTransform {

  transform(value: any, format: string = "dd-MM-yyyy"): any {
    const datePipe = new DatePipe('en-US');
    return datePipe.transform(value, format);
  }
}
