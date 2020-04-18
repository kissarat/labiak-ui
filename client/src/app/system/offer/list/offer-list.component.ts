import { OnInit, Component } from '@angular/core';
import { IOffer } from 'src/app/interfaces/offer/offer.interface';
import { OfferService } from '../../services/offer.service';

@Component({
  selector: 'app-offer-list',
  templateUrl: './offer-list.component.html'
})
export class OfferListComponent implements OnInit {
  public offers: IOffer[] = [];

  constructor(private offerService: OfferService) {
  }

  async ngOnInit(): Promise<void> {
    const { data } = await this.offerService.fetch().toPromise();
    this.offers = data;
  }
}
