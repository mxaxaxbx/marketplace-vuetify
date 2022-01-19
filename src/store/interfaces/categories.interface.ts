export interface CategoriesI {
  categories?: CategoryI[];
  categories_loading: boolean;
  categories_error: string;
}

export interface CategoryI {
  id          : number | string;
  name        : string;
  description : string;
  image_url   : string;
  slug?       : string;
  parent?     : number | string;
}
