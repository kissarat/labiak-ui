import { RepositoryService } from './repository.service';
import { IOffer } from 'src/app/interfaces/offer/offer.interface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class OfferService extends RepositoryService<IOffer> {
  constructor(http: HttpClient) {
    super(http);
  };

  get name(): string {
    return "offer";
  }
}
