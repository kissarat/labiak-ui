import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { OfferModule } from './system/offer/offer.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    OfferModule,
    AppRoutingModule,
    RouterModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
