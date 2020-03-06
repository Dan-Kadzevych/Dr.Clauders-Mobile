import { normalize } from 'normalizr';
import compact from 'lodash/compact';

import { productDetailsSchema, productVariationListSchema } from '../schemas';
import { formatProductDetails, getPackageSizeAttribute } from './utils';

const productId = 92;

const productDetailsResponse: import('ProductModels').ProductDetailsResponse = {
  id: 92,
  name: 'Gelenk Serum',
  type: 'variable',
  short_description: '<p>Продвинутая поддержка суставной системы кошек</p>\n',
  price_html:
    '<span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">&#8372;</span>670.00</span>',
  stock_status: 'instock',
  images: [
    {
      id: 863,
      date_created: '2019-09-15T09:20:13',
      date_created_gmt: '2019-09-15T09:20:13',
      date_modified: '2019-09-15T09:20:13',
      date_modified_gmt: '2019-09-15T09:20:13',
      src: 'https://drclauders.com.ua/wp-content/uploads/2019/08/GelenkCat.png',
      name: 'GelenkCat',
      alt: '',
    },
  ],
  attributes: [
    {
      id: 0,
      name: 'размер-упаковки',
      position: 0,
      visible: true,
      variation: true,
      options: ['100мл'],
    },
  ],
  default_attributes: [
    {
      id: 0,
      name: 'размер-упаковки',
      option: '100мл',
    },
  ],
  variations: [717],
  meta_data: [
    {
      id: 411,
      key: 'wc_productdata_options',
      value: [
        {
          _bubble_new: '',
          _bubble_text: '',
          _custom_tab_title: '',
          _custom_tab: '',
          _product_video: '',
          _product_video_size: '',
          _product_video_placement: '',
          _top_content: '',
          _bottom_content: '',
        },
      ],
    },
    {
      id: 3458,
      key: 'o-discount',
      value: {
        type: 'percentage',
        'rules-type': 'intervals',
      },
    },
    {
      id: 3459,
      key: 'yikes_woo_products_tabs',
      value: [
        {
          title: 'Дополнительная информация',
          id: 'дополнительная-информация',
          content:
            '<span style="font-weight: 400;">Ваша кошка нуждается в продвинутой поддержке суставов? Наш Геленк Сироп создан для поддержки всей суставной системы кошки при тяжелых и очень тяжелых нарушениях. Рекомендуется как в профилактических целях, так и в качестве компонента комплексной терапии заболеваний суставов. В составе NEM (натуральная мембрана яичной скорлупы)- новый активный ингредиент, содержащий натуральные коллагены, глюкозамин, хондроитин сульфат, гиалуроновую кислоту, кератансульфаты и важные аминокислоты. Они традиционно используются при лечении серьезных и очень серьезных нарушений костно-мышечной системы. Высокая концентрация активных  веществ в сиропе может способствовать быстрому облегчению нарушений. Фермент бромелайн из ананаса и папайи способствует метаболизму высококачественных активных ингредиентов, стимулирующих регенерацию хрящевой ткани, а также обладает противовоспалительным и антиагрегантным действием.</span>\r\n\r\n&nbsp;',
        },
        {
          title: 'Инструкция по применению',
          id: 'инструкция-по-применению',
          content:
            '<span style="font-weight: 400;"><strong>Дозировка</strong>: 1 нажатие дозатора (1,5мл=2г) на 5-7 кг веса ежедневно. </span>\r\n\r\nМожно давать напрямую животному или добавлять в корм.',
        },
        {
          title: 'Ингредиенты',
          id: 'ингредиенты',
          content:
            '<span style="font-weight: 400;"><strong>Состав</strong>: NEM (мембрана яичной скорлупы) 3%, гидролизат желатина 2,5%, глюкозамин 2%, хондроитин сульфат 2%, ананас (порошок) 1,5%, папайя (порошок) 1,5%, гиалуроновая кислота 0,2%, дьявольский коготь (порошок) 0,5%. рапсовое масло, солод</span>\r\n\r\n<span style="font-weight: 400;"><strong>Аналитическая составляющая</strong>: белки 6,5%, жиры 16,8%, клетчатка 0,7%, минералы  1,3%, влажность 64,7%</span>\r\n\r\n<span style="font-weight: 400;"><strong>Добавки/кг</strong>: </span><span style="font-weight: 400;"><strong>витамины</strong>: E 1,425мг, </span>\r\n\r\n&nbsp;\r\n\r\n&nbsp;',
        },
      ],
    },
    {
      id: 3460,
      key: '_yoast_wpseo_primary_product_cat',
      value: '22',
    },
    {
      id: 3461,
      key: 'wc_ps_subtitle',
      value: 'Геленк Сироп для суставов кошек',
    },
    {
      id: 3462,
      key: '_yoast_wpseo_content_score',
      value: '60',
    },
  ],
  _links: {
    self: [
      {
        href: 'https://drclauders.com.ua/wp-json/wc/v3/products/92',
      },
    ],
    collection: [
      {
        href: 'https://drclauders.com.ua/wp-json/wc/v3/products',
      },
    ],
  },
};

const productVariationListResponse: import('ProductModels').ProductVariationListResponse = [
  {
    id: 717,
    price: '670',
    stock_status: 'instock',
    attributes: [
      {
        id: 0,
        name: 'размер-упаковки',
        option: '100мл',
      },
    ],
    menu_order: 0,
  },
];

const cartProduct: import('Cart').CartProduct = {
  id: '92',
  quantity: '1',
};

const cart: import('Cart').Cart = {
  items: {
    '92': '1',
  },
};

export const error = {
  message: 'Error Message',
};

const normalizedProductDetails = normalize<
  import('ProductModels').ProductDetails,
  import('ProductModels').NormalizedProductDetails,
  number
>(formatProductDetails(productDetailsResponse), productDetailsSchema);

const normalizedProductVariations = normalize<
  import('ProductModels').ProductVariation,
  import('ProductModels').NormalizedProductVariations,
  number[]
>(productVariationListResponse, productVariationListSchema);

const productDetailsState: import('./reducer').ProductDetailsState = {
  products: {
    byId: normalizedProductDetails.entities.product,
    ids: [normalizedProductDetails.result],
  },
  variations: {
    byId: normalizedProductVariations.entities.variations,
    ids: normalizedProductVariations.result,
  },
};

const productDetails: import('ProductModels').ProductDetails =
  normalizedProductDetails.entities.product[productId];
const productVariations: import('ProductModels').ProductVariationList = Object.keys(
  normalizedProductVariations.entities.variations,
).map(id => normalizedProductVariations.entities.variations[id]);

const packageSizeOptions: import('FormTypes').OptionList = compact(
  productVariations.map(v => {
    const packageSizeAttribute = getPackageSizeAttribute(v.attributes);

    if (packageSizeAttribute) {
      return {
        label: packageSizeAttribute.option,
        value: v.id.toString(),
      };
    }

    return undefined;
  }),
);

const defaultPackageSizeValue = '717';

const attributes = [
  {
    id: 0,
    name: 'размер-упаковки',
    option: '100мл',
  },
  {
    id: 0,
    name: 'fake',
    option: 'fake',
  },
];

const packageSizeAttribute = {
  id: 0,
  name: 'размер-упаковки',
  option: '100мл',
};

const productSubtitle = 'Геленк Сироп для суставов кошек';

export default {
  cart,
  cartProduct,
  productId,
  productDetailsResponse,
  normalizedProductDetails,
  productVariationListResponse,
  normalizedProductVariations,
  productDetailsState,
  productVariations,
  productDetails,
  packageSizeOptions,
  defaultPackageSizeValue,
  attributes,
  packageSizeAttribute,
  productSubtitle,
  error,
} as const;
