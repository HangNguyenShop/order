import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CartHeaderComponent } from './cart-header/cart-header.component';
import { Body1Component } from './body1/body1.component';
import { CartFooterComponent } from './cart-footer/cart-footer.component';

import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr, 'fr');

@NgModule({
  declarations: [
    AppComponent,
    CartHeaderComponent,
    Body1Component,
    CartFooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
