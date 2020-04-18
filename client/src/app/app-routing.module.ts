import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { OfferListComponent } from './system/offer/list/offer-list.component';
import { isDebug } from 'src/constants';
import { MaintenanceComponent } from './system/maintenance/maintenance.component';

const routes: Routes = [
  { path: '', component: MaintenanceComponent },
  { path: 'offers', component: OfferListComponent }
];

const options: ExtraOptions = {
  enableTracing: isDebug
}

@NgModule({
  imports: [RouterModule.forRoot(routes, options)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
