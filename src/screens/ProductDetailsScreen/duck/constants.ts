const getQtyOptions = (qty: number): import('FormTypes').OptionList => {
  const options = [];

  for (let i = 1; i <= qty; i += 1) {
    options.push({ label: i.toString(), value: i });
  }

  return options;
};

// TODO give same name for size attribute on site
export const PACKAGE_SIZE_ATTRIBUTE_NAMES = [
  'выбор-размера-упаковки',
  'размер-упаковки',
];

export const QTY_OPTIONS = getQtyOptions(10);
