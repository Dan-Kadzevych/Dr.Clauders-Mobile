import React from 'react';
import { Image } from 'react-native';
import { render } from 'react-native-testing-library';

import ProductItem from '../ProductItem';

describe('Product Item', () => {
  const testProps = {
    description: 'Test Description',
    image: 'testUrl',
    index: 0,
    name: 'Test',
    price: '305',
  };

  test('Renders Correctly', () => {
    const { getByText, getByType, queryByType } = render(
      <ProductItem
        description={testProps.description}
        image={testProps.image}
        index={testProps.index}
        name={testProps.name}
        price={testProps.price}
      />,
    );
    const description = getByText(testProps.description);
    const image = getByType(Image);
    const name = getByText(testProps.name);
    const price = getByText(testProps.price);

    expect(description.props.children).toBe(testProps.description);
    expect(name.props.children).toBe(testProps.name);
    expect(price.props.children).toBe(testProps.price);
    expect(queryByType(Image)).toBe(image);
  });
});
