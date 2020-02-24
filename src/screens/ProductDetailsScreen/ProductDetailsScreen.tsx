import React, { useEffect } from 'react';
import { Text } from 'react-native';
import { useDispatch } from 'react-redux';
import SafeAreaView from 'react-native-safe-area-view';

import { productDetailsOperations } from 'screens/ProductDetailsScreen/duck';

/* Typings
============================================================================= */

type Props = {
  route: import('NavigatorModels').ProductsRouteProp<'ProductDetails'>;
};

/* ProductsScreen
============================================================================= */

const ProductDetailsScreen: React.FC<Props> = ({ route }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      productDetailsOperations.getProductDetails(route.params.productId),
    );
  }, [dispatch, route.params.productId]);

  return (
    <SafeAreaView>
      <Text>{route.params.productId}</Text>
    </SafeAreaView>
  );
};

/* StyleSheet
============================================================================= */

// const styles = StyleSheet.create({});

/* Export
============================================================================= */

export default ProductDetailsScreen;
