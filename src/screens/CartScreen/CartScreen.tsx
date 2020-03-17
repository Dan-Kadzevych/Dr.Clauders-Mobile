import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { Formik } from 'formik';

import { Text } from 'components';
import { ActionsBar, TotalBar, CartItemList } from './components';
import { cartSelectors } from './duck';

/* CartScreen
============================================================================= */

const CartScreen: React.FC = () => {
  const cartItems = useSelector(cartSelectors.getCartItems);
  const { totalPrice, totalAmount } = useSelector(
    cartSelectors.getCartTotalInfo,
  );
  const quantityById = useSelector(cartSelectors.getQuantityById);

  if (!cartItems || !Object.keys(quantityById).length) {
    return <Text>Loading...</Text>;
  }

  return (
    <Formik
      initialValues={{ quantityById }}
      enableReinitialize
      onSubmit={v => Promise.resolve(v)}
    >
      {({ handleSubmit }) => (
        <View style={styles.container}>
          <TotalBar totalAmount={totalAmount} totalPrice={totalPrice} />
          <CartItemList cartItems={cartItems} />
          <ActionsBar handleSubmit={handleSubmit} />
        </View>
      )}
    </Formik>
  );
};

/* StyleSheet
============================================================================= */

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

/* Export
============================================================================= */

export default CartScreen;
