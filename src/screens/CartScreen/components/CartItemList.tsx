import React from 'react';
import { StyleSheet, FlatList } from 'react-native';

import CartItem from './CartItem';

/* Typings
============================================================================= */

type Props = {
  cartItems: import('CartModels').CartItem[];
};

/* CartItemList
============================================================================= */

const CartItemList: React.FC<Props> = ({ cartItems }) => (
  <FlatList
    contentContainerStyle={styles.listContainer}
    data={cartItems}
    keyExtractor={({ id }) => id.toString()}
    renderItem={({ item: { image, name, price, id }, index }) => (
      <CartItem
        imageUri={image}
        name={name}
        price={price}
        id={id}
        index={index}
      />
    )}
  />
);

/* Default Props
============================================================================= */

CartItemList.defaultProps = {
  cartItems: [],
};

/* StyleSheet
============================================================================= */

const styles = StyleSheet.create({
  listContainer: {
    paddingHorizontal: 5,
    paddingVertical: 10,
  },
});

/* Export
============================================================================= */

export default CartItemList;
