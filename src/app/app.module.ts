import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { currencySymbolPipe } from './card/currencySymbol.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    currencySymbolPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [{
    provide: DEFAULT_CURRENCY_CODE,
    useFactory: (locale: string) => locale === 'it' ? 'EUR' : 'USD',
    deps: [LOCALE_ID]
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
