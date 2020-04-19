import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { IOffer, Offer } from 'src/app/interfaces/offer/offer.interface';
import { OfferService } from '../../services/offer.service';

@Component({
  selector: 'app-offer-edit',
  templateUrl: './offer-edit.component.html'
})
export class OfferEditComponent implements OnInit {
  private offerId = 0;
  fetch = new Subject<string>();
  createSubject = new Subject<IOffer>();
  updateSubject = new Subject<IOffer>();
  form: FormGroup;

  public constructor(
    private route: ActivatedRoute,
    private offerService: OfferService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  public setForm(offer: IOffer = new Offer()) {
    if (offer.offerId > 0) {
      this.offerId = offer.offerId;
    }
    this.form.setValue({
      name: offer.name,
      description: offer.description,
      price: offer.price
    });
  }

  public ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: '',
      description: '',
      price: '0'
    });

    this.fetch
      .pipe(
        switchMap((offerId: string) => this.offerService.fetch({ offerId }))
      )
      .subscribe(({ count, data }) => {
          if (count > 0) {
            this.offerId = data[0].offerId;
            this.setForm(data[0]);
          }
      });

    this.createSubject
      .pipe(switchMap((offer: IOffer) => this.offerService.create(offer)))
      .subscribe(({ ok, data }) => {
        if (ok) {
          this.router.navigate(['/', 'offer', data[0].offerId])
        }
      })

    this.updateSubject
      .pipe(switchMap((offer: IOffer) => this.offerService.update(this.offerId, offer)))
      .subscribe(({ ok, data }) => {
        if (ok) {
          this.setForm(data[0]);
        }
      })

    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.fetch.next(id);
      } else {
        this.setForm();
      }
    });
  }

  public submit() {
    if (this.offerId > 0) {
      this.updateSubject.next(this.form.getRawValue());
    } else {
      this.createSubject.next(this.form.getRawValue());
    }
  }
}
