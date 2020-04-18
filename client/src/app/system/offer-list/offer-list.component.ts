import { OnInit, Component } from '@angular/core';
import { Offer } from 'src/app/interfaces/offer.interface';
import { OfferService } from '../services/offer.service';

@Component({
  selector: 'app-offer-list',
  templateUrl: './offer-list.component.html'
})
export class OfferListComponent implements OnInit {
  public offers: Offer[] = [];

  constructor(private offerService: OfferService) {

  }

  async ngOnInit(): Promise<void> {
    const { data } = await this.offerService.list().toPromise();
    this.offers = data;
  }
}
