import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'boldpipe'
})
export class BoldpipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
