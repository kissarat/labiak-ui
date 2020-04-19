import { Ok } from './ok';

export interface Success<Model> extends Ok {
  count: number;
  data: Model[];
}
