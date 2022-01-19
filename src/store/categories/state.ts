import { CategoriesI } from "../interfaces/categories.interface";

export const state: CategoriesI = {
  categories: [
    {
      id: 1,
      image_url: "https://picsum.photos/id/1/200/200",
      name: "Category 1",
      description: "This is category 1",
    },
    {
      id: 2,
      image_url: "https://picsum.photos/id/2/200/200",
      name: "Category 2",
      description: "This is category 2",
    },
    {
      id: 3,
      image_url: "https://picsum.photos/id/3/200/200",
      name: "Category 3",
      description: "This is category 3",
    },
  ],
  categories_error: '',
  categories_loading: false,
}
