import { OnInit, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IOffer, Offer } from 'src/app/interfaces/offer/offer.interface';
import { Subject } from 'rxjs';
import { OfferService } from '../../services/offer.service';
import { switchMap } from 'rxjs/operators'

@Component({
  selector: 'app-offer-edit',
  templateUrl: './offer-edit.component.html'
})
export class OfferEditComponent implements OnInit {
  offer: IOffer = new Offer();
  fetch = new Subject<string>();

  public constructor(
    private route: ActivatedRoute,
    private offerService: OfferService
  ) {}

  public ngOnInit(): void {
    this.fetch
      .pipe(
        switchMap((offerId: string) => this.offerService.fetch({ offerId }))
      )
      .subscribe(({ count, data }) => {
          if (count > 0) {
            this.offer = data[0];
          }
      });

    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.fetch.next(id);
      } else {
        this.offer = new Offer();
      }
    });
  }
}
