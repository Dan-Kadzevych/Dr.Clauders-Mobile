import React, { useEffect, useMemo } from 'react';
import { Image, View, StyleSheet, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { Button, Text } from 'components';
import { Colors } from 'styles';
import { normalize } from 'utils/styles';
import { getProductSubtitle } from './duck/utils';
import { productDetailsOperations, productDetailsSelectors } from './duck';

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
  const selectProductDetails = useMemo(
    productDetailsSelectors.makeGetProductDetailsSelector,
    [],
  );

  const product = useSelector((state: import('MyTypes').RootState) =>
    selectProductDetails(state, productId),
  );

  useEffect(() => {
    dispatch(productDetailsOperations.getProductDetails(productId));
  }, [dispatch, productId]);

  if (!product) {
    return <Text>Loading...</Text>;
  }

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: product.images[0].src }} style={styles.image} />
      <View style={styles.infoContainer}>
        <View style={styles.info}>
          <Text style={styles.subtitle}>{product.name}</Text>
          <Text style={styles.shortDescription}>
            {getProductSubtitle(product)}
          </Text>
          <Text style={styles.price_range}>{product.price_range}</Text>
        </View>
        <View style={styles.variation_form}>
          <View style={styles.select} />
          <View style={styles.addToBagContainer}>
            <Button title="В Корзину" onPress={() => true} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

/* StyleSheet
============================================================================= */

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
  info: {
    borderBottomWidth: 1,
    borderColor: Colors.geryLight,
    flex: 1,
    paddingVertical: 15,
  },
  price_range: {
    fontSize: normalize(20),
    fontWeight: 'bold',
  },
  subtitle: {
    color: Colors.primary,
    fontFamily: 'Lato',
    fontSize: normalize(17),
    fontWeight: 'bold',
    marginBottom: 7,
  },
  shortDescription: {
    fontSize: normalize(15),
    marginBottom: 7,
  },
  variation_form: {
    flex: 1,
  },
  select: {
    borderBottomWidth: 1,
    borderColor: Colors.geryLight,
    flex: 1,
    height: 40,
    paddingVertical: 15,
  },
  addToBagContainer: {
    paddingHorizontal: 3,
    paddingVertical: 15,
  },
});

/* Export
============================================================================= */

export default ProductDetailsScreen;
