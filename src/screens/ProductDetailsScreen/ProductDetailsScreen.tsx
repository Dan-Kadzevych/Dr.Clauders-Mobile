import React, { useEffect, useMemo } from 'react';
import { Image, View, StyleSheet, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import isEmpty from 'lodash/isEmpty';

import { Text } from 'components';
import { Colors } from 'styles';
import { AddToBagForm, Info } from './components';
import { productDetailsOperations, productDetailsSelectors } from './duck';
import { getProductSubtitle } from './duck/utils';

/* Typings
============================================================================= */

export type Props = {
  route: import('NavigatorModels').ProductsRouteProp<'ProductDetails'>;
};

/* ProductDetailsScreen
============================================================================= */

const ProductDetailsScreen: React.FC<Props> = ({ route }) => {
  const {
    params: { productId },
  } = route;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(productDetailsOperations.getProductDetails(productId));
    dispatch(productDetailsOperations.getProductVariations(productId));
  }, [dispatch, productId]);

  const {
    getProductDetails,
    getDefaultPackageSizeValue,
    getPackageSizeOptions,
  } = useMemo(productDetailsSelectors.makeProductDetailsSelectors, []);

  const product = useSelector((state: import('MyTypes').RootState) =>
    getProductDetails(state, productId),
  );
  const variations = useSelector(
    productDetailsSelectors.getProductVariationsById,
  );
  const defaultPackageSizeValue = useSelector(
    (state: import('MyTypes').RootState) =>
      getDefaultPackageSizeValue(state, productId),
  );
  const packageSizeOptions = useSelector((state: import('MyTypes').RootState) =>
    getPackageSizeOptions(state, productId),
  );

  const productSubtitle = useMemo(() => getProductSubtitle(product), [product]);

  if (
    !product ||
    !packageSizeOptions ||
    !defaultPackageSizeValue ||
    isEmpty(variations)
  ) {
    return <Text>Loading...</Text>;
  }

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: product.images[0].src }} style={styles.image} />
      <View style={styles.infoContainer}>
        <Info
          name={product.name}
          priceRange={product.price_range}
          subtitle={productSubtitle}
        />
        <AddToBagForm
          variations={variations}
          defaultPackageSizeValue={defaultPackageSizeValue}
          packageSizeOptions={packageSizeOptions}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    height: 500,
  },
  infoContainer: {
    backgroundColor: Colors.white,
    flex: 1,
    paddingHorizontal: 10,
  },
});

export default ProductDetailsScreen;
