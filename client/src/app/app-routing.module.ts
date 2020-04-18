import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { OfferListComponent } from './system/offer/list/offer-list.component';
import { isDebug } from 'src/constants';
import { MaintenanceComponent } from './system/maintenance/maintenance.component';
import { OfferEditComponent } from './system/offer/edit/offer-edit.component';
import { OfferModule } from './system/offer/offer.module';

const routes: Routes = [
  { path: "", component: MaintenanceComponent },
  { path: "offer", component: OfferEditComponent },
  { path: "offer/:id", component: OfferEditComponent },
  { path: "offers", component: OfferListComponent },
];

const options: ExtraOptions = {
  enableTracing: isDebug
}

@NgModule({
  imports: [OfferModule, RouterModule.forRoot(routes, options)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
