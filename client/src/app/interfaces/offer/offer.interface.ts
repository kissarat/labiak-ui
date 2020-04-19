import { Currency } from '../../currency';

export interface IOffer {
  offerId?: string;
  available: boolean;
  name: string;
  description?: string;
  price: number;
  currencyId: Currency;
  quantity: number;
}

export class Offer implements IOffer {
  offerId: string;
  available = false;
  name = '';
  description = '';
  price = 0;
  currencyId: Currency;
  quantity = 1;
}
