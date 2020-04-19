import { OnInit, Component } from '@angular/core';
import { IOffer } from 'src/app/interfaces/offer/offer.interface';
import { OfferService } from '../../services/offer.service';
import { Subject } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-offer-list',
  templateUrl: './offer-list.component.html'
})
export class OfferListComponent implements OnInit {
  public offers: IOffer[] = [];
  deleteSubject = new Subject<string>();

  constructor(private offerService: OfferService) {
  }

  async loadOffers() {
    const { data } = await this.offerService.fetch().toPromise();
    this.offers = data;
  } 

  async ngOnInit(): Promise<void> {
    this.deleteSubject
      .pipe(switchMap((offerId: string) => this.offerService.delete(offerId)))
      .subscribe(() => this.loadOffers());
    this.loadOffers();
  }

  public delete(offer: IOffer) {
    if (confirm(`Ви уверени, что хотите удалить "${offer.name}"?`)) {
      this.deleteSubject.next(offer.offerId);
    }
  }
}
