import { NgModule } from '@angular/core';
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
