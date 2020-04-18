import { NgModule } from '@angular/core';
import { OfferListComponent } from './list/offer-list.component';
import { OfferService } from '../services/offer.service';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { OfferEditComponent } from './edit/offer-edit.component';

@NgModule({
  declarations: [OfferListComponent, OfferEditComponent],
  providers: [OfferService],
  imports: [RouterModule, HttpClientModule, BrowserModule],
})
export class OfferModule {}
