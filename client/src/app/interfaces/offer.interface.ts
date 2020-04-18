import { Currency } from '../currency';

export interface Offer {
  available: boolean;
  name: string;
  description?: string;
  price: number;
  currencyId: Currency;
  quantity: number;
}
