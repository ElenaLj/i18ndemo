import { Inject, LOCALE_ID, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencySymbolPipe'
})
export class currencySymbolPipe implements PipeTransform {

  transform(value: any) {
    if (this.locale === "en-US") {
      return "$" + value;
    }
    return value + "€"
  }

  constructor(@Inject(LOCALE_ID) private locale: string) { }
}
