import { normalize } from 'normalizr';

import { formatProducts } from 'utils/product';
import { categoryListSchema, productListSchema } from '../schemas';

export const productResponse: import('ProductModels').ProductResponse = {
  id: 745,
  name: 'Kittenmilch +',
  short_description: '<p>Сухое молоко для вскармливания котят</p>\n',
  price_html:
    '<span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">&#8372;</span>310.00</span> &ndash; <span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">&#8372;</span>1,600.00</span>',
  stock_status: 'outofstock',
  images: [
    {
      id: 861,
      date_created: '2019-09-15T09:14:44',
      date_created_gmt: '2019-09-15T09:14:44',
      date_modified: '2019-09-15T09:14:44',
      date_modified_gmt: '2019-09-15T09:14:44',
      src:
        'https://drclauders.com.ua/wp-content/uploads/2019/09/KittenMilk.png',
      name: 'KittenMilk',
      alt: '',
    },
  ],
};
export const product: import('ProductModels').Product = {
  id: 745,
  name: 'Kittenmilch +',

  short_description: 'Сухое молоко для вскармливания котят',

  price_range: '₴310.00 – ₴1,600.00',

  stock_status: 'outofstock',

  images: [
    {
      id: 861,
      date_created: '2019-09-15T09:14:44',
      date_created_gmt: '2019-09-15T09:14:44',
      date_modified: '2019-09-15T09:14:44',
      date_modified_gmt: '2019-09-15T09:14:44',
      src:
        'https://drclauders.com.ua/wp-content/uploads/2019/09/KittenMilk.png',
      name: 'KittenMilk',
      alt: '',
    },
  ],
};

const categoryResponse1: import('CategoryModels').CategoryResponse = {
  id: 19,
  name: 'Собаки',
  parent: 0,
  image: {
    id: 56,
    src:
      'https://drclauders.com.ua/wp-content/uploads/2019/08/golden-retriever-puppy.jpg',
    name: 'golden-retriever-puppy',
  },
  menu_order: 3,
  count: 18,
};
const categoryResponse2: import('CategoryModels').CategoryResponse = {
  id: 27,
  name: 'Intestinal- Поддержка пищеварительной системы',
  parent: 19,
  image: null,
  menu_order: 5,
  count: 2,
};

export const productListResponse: import('ProductModels').ProductListResponse = [
  productResponse,
];
export const categoryListResponse: import('CategoryModels').CategoryListResponse = [
  categoryResponse1,
  categoryResponse2,
];

export const normalizedProductList = normalize<
  import('ProductModels').Product,
  import('ProductModels').NormalizedProducts,
  number[]
>(formatProducts(productListResponse), productListSchema);

export const normalizedCategoryList = normalize<
  import('CategoryModels').Category,
  import('CategoryModels').NormalizedCategories,
  number[]
>(categoryListResponse, categoryListSchema);

export const error = {
  message: 'Error Message',
};

export const productsOverviewState: import('./reducer').ProductsOverviewState = {
  products: {
    byId: normalizedProductList.entities.products,
    ids: normalizedProductList.result,
  },
  categories: {
    byId: normalizedCategoryList.entities.categories,
    ids: normalizedCategoryList.result,
  },
};

export const categoryList: import('CategoryModels').CategoryList = Object.keys(
  normalizedCategoryList.entities.categories,
).map(key => normalizedCategoryList.entities.categories[key]);

export const productList: import('ProductModels').ProductList = Object.keys(
  normalizedProductList.entities.products,
).map(key => normalizedProductList.entities.products[key]);

export const parentCategories: import('CategoryModels').CategoryList = categoryList.filter(
  c => c.parent === 0,
);
