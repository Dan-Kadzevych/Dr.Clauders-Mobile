import React, { useEffect } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import { useDispatch, useSelector } from 'react-redux';

import { ProductItem } from 'components';
import { productsOverviewOperations, productsOverviewSelectors } from './duck';

/* Typings
============================================================================= */

type Props = {
  navigation: import('NavigatorModels').ProductsNavigationProp<
    'ProductsOverview'
  >;
};

/* ProductsScreen
============================================================================= */

const ProductsOverviewScreen: React.FC<Props> = ({ navigation }) => {
  const dispatch = useDispatch();

  const products = useSelector(productsOverviewSelectors.getProductsArray);

  useEffect(() => {
    dispatch(productsOverviewOperations.getProducts());
    // dispatch(productsOperations.getCategories());
  }, [dispatch]);

  return (
    <SafeAreaView>
      <FlatList
        contentContainerStyle={styles.list}
        data={products}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item, index }) => (
          <ProductItem
            handlePress={() =>
              navigation.navigate('ProductDetails', {
                productId: item.id,
              })
            }
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

export default ProductsOverviewScreen;
