import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { useSelector } from 'react-redux';

import CartItem from './CartItem';
import { cartSelectors } from '../duck';

/* CartItemList
============================================================================= */

const CartItemList: React.FC = () => {
  const cartItems = useSelector(cartSelectors.getCartItems);

  return (
    <FlatList
      contentContainerStyle={styles.listContainer}
      data={cartItems}
      keyExtractor={({ variationId }) => variationId.toString()}
      renderItem={({
        item: { image, name, price, variationId, productId },
        index,
      }) => (
        <CartItem
          listLength={cartItems.length}
          imageUri={image}
          name={name}
          price={price}
          variationId={variationId}
          productId={productId}
          index={index}
        />
      )}
    />
  );
};

/* Default Props
============================================================================= */

const styles = StyleSheet.create({
  listContainer: {
    paddingBottom: 80,
  },
});

/* Export
============================================================================= */

export default CartItemList;
