import React from 'react';
import { View, StyleSheet } from 'react-native';

import { Text } from 'components';
import { Colors } from 'styles';
import { normalize } from 'utils/styles';

/* Typings
============================================================================= */

type Props = {
  totalAmount: number | string;
  totalPrice: number | string;
};

/* TotalBar
============================================================================= */

const TotalBar: React.FC<Props> = ({ totalAmount, totalPrice }) => (
  <View style={styles.container}>
    <Text>{totalAmount} товаров на сумму </Text>
    <Text style={styles.price}>₴{totalPrice}</Text>
  </View>
);

/* Default Props
============================================================================= */

TotalBar.defaultProps = {
  totalAmount: '',
  totalPrice: '',
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
