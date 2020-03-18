import React, { useEffect, useMemo } from 'react';
import { Image, View, StyleSheet, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import isEmpty from 'lodash/isEmpty';

import { Text } from 'components';
import { Colors } from 'styles';
import { AddToCartForm, Info } from './components';
import { productDetailsOperations, productDetailsSelectors } from './duck';
import { getProductSubtitle /* findDetailsScreenRoute */ } from './duck/utils';

/* Typings
============================================================================= */

export type Props = {
  route: import('NavigatorModels').ProductsRouteProp<'ProductDetails'>;
  navigation: import('NavigatorModels').ProductsNavigationProp<
    'ProductDetails'
  >;
};

/* ProductDetailsScreen
============================================================================= */

const ProductDetailsScreen: React.FC<Props> = ({ route /* navigation */ }) => {
  const {
    params: { productId },
  } = route;

  const dispatch = useDispatch();

  useEffect(() => {
    const source = axios.CancelToken.source();

    dispatch(
      productDetailsOperations.getProductDetails(productId, {
        cancelToken: source.token,
      }),
    );
    dispatch(
      productDetailsOperations.getProductVariations(productId, {
        cancelToken: source.token,
      }),
    );

    return () => {
      source.cancel('Operation canceled by the user.');
    };
  }, [dispatch, productId]);

  // useEffect(
  //   () => () => {
  //     const { routes, index } = navigation.dangerouslyGetState();
  //     const shouldClear = !findDetailsScreenRoute(routes, productId, index);
  //
  //     if (shouldClear) {
  //       dispatch(productDetailsOperations.clearProductDetails(productId));
  //     }
  //   },
  //   [dispatch, navigation, productId],
  // );

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
        <AddToCartForm
          defaultPackageSizeValue={defaultPackageSizeValue}
          packageSizeOptions={packageSizeOptions}
          product={product}
          variations={variations}
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
