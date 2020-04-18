import { RepositoryService } from './repository.service';
import { Offer } from 'src/app/interfaces/offer.interface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class OfferService extends RepositoryService<Offer> {
  constructor(http: HttpClient) {
    super(http);
  };

  get name(): string {
    return "offer";
  }
}
