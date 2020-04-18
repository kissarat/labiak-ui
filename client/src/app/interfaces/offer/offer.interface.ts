import { Currency } from '../../currency';

export interface IOffer {
  offerId?: number;
  available: boolean;
  name: string;
  description?: string;
  price: number;
  currencyId: Currency;
  quantity: number;
}

export class Offer implements IOffer {
  offerId: 0;
  available = false;
  name = '';
  description = '';
  price = 0;
  currencyId: Currency;
  quantity = 1;
}
