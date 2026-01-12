export interface IProductResponse {
  [x: string]: any;
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  status: string;
  imageBase64: string;
}
