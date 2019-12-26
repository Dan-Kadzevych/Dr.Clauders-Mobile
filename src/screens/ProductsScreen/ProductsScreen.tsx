import React from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-navigation';

import { useDispatch } from 'react-redux';
import { getProducts } from './duck/operations';

import './duck/reducer';

const ProductsScreen = () => {
  const dispatch = useDispatch();

  dispatch(getProducts());

  return (
    <SafeAreaView>
      <Text>ProductsScreen</Text>
    </SafeAreaView>
  );
};

export default ProductsScreen;
