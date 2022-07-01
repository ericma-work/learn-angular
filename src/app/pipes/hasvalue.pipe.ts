
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hasValue'
})
export class HasValuePipe implements PipeTransform{
    transform(input: any): boolean {
        if (input === null || input === undefined) {
            return false
        } else if (input.constructor.name === 'Array') {
            return input.length !== 0;
        } else if (input.constructor.name === 'Object') {
            return Object.keys(input).length !== 0;
        } else if (typeof(input) === 'string') {
            return input.length !== 0;
        } else {
            return false;
        }
    }
}