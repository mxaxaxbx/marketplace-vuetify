export interface ProductsI {
  products?   : ProductI[];
  product?    : ProductI;
  promotions? : ProductI[];
}

export interface ProductI {
  id                  : number | string;
  image_url           : string;
  price               : number;
  discount_price      : number;
  discount_percentage : number;
  name                : string;
  description         : string;
  store_name          : string;
}
