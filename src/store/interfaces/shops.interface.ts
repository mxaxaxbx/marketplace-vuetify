export interface ShopsI {
  shops? : ShopI[];
  shop?  : ShopI;
}

export interface ShopI {
  id          : number | string;
  image_url   : string;
  name        : string;
  description : string;
  categories  : string[];
}
