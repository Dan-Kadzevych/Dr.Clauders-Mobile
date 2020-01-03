import React from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-navigation';

import { useDispatch } from 'react-redux';
import { productsOperations } from './duck';

import './duck/reducer';

const ProductsScreen = () => {
  const dispatch = useDispatch();

  dispatch(productsOperations.getProducts());
  dispatch(productsOperations.getCategories());

  return (
    <SafeAreaView>
      <Text>ProductsScreen</Text>
    </SafeAreaView>
  );
};

export default ProductsScreen;
