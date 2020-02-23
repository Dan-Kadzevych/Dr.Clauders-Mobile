import React from 'react';
import { Text } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';

/* Typings
============================================================================= */

type Props = {
  route: import('NavigatorModels').ProductsRouteProp<'ProductDetails'>;
};

/* ProductsScreen
============================================================================= */

const ProductDetailsScreen: React.FC<Props> = ({ route }) => (
  <SafeAreaView>
    <Text>{route.params.productId}</Text>
  </SafeAreaView>
);

/* StyleSheet
============================================================================= */

// const styles = StyleSheet.create({});

/* Export
============================================================================= */

export default ProductDetailsScreen;
