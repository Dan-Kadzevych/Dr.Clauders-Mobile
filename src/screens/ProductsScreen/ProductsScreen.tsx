import React, { useEffect } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import { useDispatch, useSelector } from 'react-redux';

import { ProductItem } from 'components';
import { productsOperations, productsSelectors } from './duck';

/* ProductsScreen
============================================================================= */

const ProductsScreen: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(productsOperations.getProducts());
    dispatch(productsOperations.getCategories());
  }, [dispatch]);

  const products = useSelector(productsSelectors.getProductsArray);

  return (
    <SafeAreaView>
      <FlatList
        contentContainerStyle={styles.list}
        data={products}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item, index }) => (
          <ProductItem
            description={item.short_description}
            image={item.images[0].src}
            index={index}
            name={item.name}
            price={item.price_range}
          />
        )}
      />
    </SafeAreaView>
  );
};

/* StyleSheet
============================================================================= */

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    paddingBottom: 10,
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 10,
  },
});

/* Export
============================================================================= */

export default ProductsScreen;
