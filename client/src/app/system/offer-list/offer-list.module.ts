import { NgModule } from "@angular/core";
import { OfferListComponent } from './offer-list.component';
import { OfferService } from '../services/offer.service';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [OfferListComponent],
  providers: [OfferService],
  imports: [RouterModule, HttpClientModule]
})
export class OfferListModule {}
