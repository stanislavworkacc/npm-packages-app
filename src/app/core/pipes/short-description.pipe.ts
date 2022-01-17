import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'shortDescription',
})
export class ShortDescriptionPipe implements PipeTransform {
  transform(value: any): any {
    return value.slice(0, 12)
  }
}
