import { Inject, LOCALE_ID, Pipe, PipeTransform } from '@angular/core';

// my pipe needs to print $ for locale en-US and € for it-IT

@Pipe({
  name: 'currencySymbolPipe'
})
export class currencySymbolPipe implements PipeTransform {

  transform(value: any) {
    // TODO
    if (this.locale == "en-US") {
      return "$" + value;
    }
    return value + "€"
  }

  constructor(@Inject(LOCALE_ID) public locale: string) { }
}
