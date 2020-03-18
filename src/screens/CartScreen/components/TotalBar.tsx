import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

import { Text } from 'components';
import { Colors } from 'styles';
import { normalize } from 'utils/styles';
import { cartSelectors } from '../duck';

/* TotalBar
============================================================================= */

const TotalBar: React.FC = () => {
  const { totalPrice, totalAmount } = useSelector(
    cartSelectors.getCartTotalInfo,
  );

  return (
    <View style={styles.container}>
      <Text>{totalAmount} товаров на сумму </Text>
      <Text style={styles.price}>₴{totalPrice}</Text>
    </View>
  );
};

/* StyleSheet
============================================================================= */

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderColor: Colors.geryLight,
    height: 50,
    justifyContent: 'center',
  },
  price: {
    fontSize: normalize(14),
    fontWeight: 'bold',
  },
});

/* Export
============================================================================= */

export default TotalBar;
