import { IProductResponse } from './product-repsonse';

export interface IProductsResponse {
  message: string;
  data: IProductResponse[];
}
