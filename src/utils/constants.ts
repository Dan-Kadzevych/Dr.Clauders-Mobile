export const emptyObj = {};
export const emptyArr = [];

export const PACKAGE_SIZE_ATTRIBUTE_NAMES = [
  'выбор-размера-упаковки',
  'размер-упаковки',
];

export const MAX_QUANTITY = 10;
const getQtyOptions = (qty: number): import('FormTypes').OptionList => {
  const options = [];

  for (let i = 1; i <= qty; i += 1) {
    options.push({ label: i.toString(), value: i });
  }

  return options;
};

export const QTY_OPTIONS = getQtyOptions(MAX_QUANTITY);
