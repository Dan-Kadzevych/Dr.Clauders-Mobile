import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { useDispatch } from 'react-redux';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import { Text } from 'components';
import { Colors } from 'styles';
import { normalize } from 'utils/styles';
import CartItemFields from './CartItemFields';
import RowRightActions from './RowRightActions';
import { removeFromCart } from '../duck/operations';

/* Typings
============================================================================= */

type Props = {
  variationId: number;
  productId: number;
  imageUri: string;
  index: number;
  name: string;
  listLength: number;
  price: string | number;
};

/* CartItem
============================================================================= */

const CartItem: React.FC<Props> = ({
  imageUri,
  name,
  price,
  variationId,
  productId,
  index,
  listLength,
}) => {
  const dispatch = useDispatch();

  return (
    <Swipeable
      renderRightActions={(
        progress: import('react-native').Animated.AnimatedInterpolation,
      ) => (
        <RowRightActions
          progress={progress}
          handleRemove={() => dispatch(removeFromCart(productId, variationId))}
        />
      )}
      childrenContainerStyle={[
        styles.rowContainer,
        index < listLength - 1 && styles.paddingLeft,
      ]}
      friction={2}
      leftThreshold={80}
      rightThreshold={40}
      overshootRight={false}
    >
      <View
        style={[
          styles.itemContainer,
          index === listLength - 1 && styles.paddingLeft,
        ]}
      >
        <Image source={{ uri: imageUri }} style={styles.image} />
        <View style={styles.details}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.price}>₴{price}</Text>
          <CartItemFields itemId={variationId} />
        </View>
      </View>
    </Swipeable>
  );
};

/* Default Props
============================================================================= */

CartItem.defaultProps = {
  imageUri: '',
  index: 0,
  name: '',
  listLength: 0,
  price: '',
};

/* StyleSheet
============================================================================= */

const styles = StyleSheet.create({
  itemContainer: {
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderBottomWidth: 1,
    borderColor: Colors.geryLight,
    flex: 1,
    flexDirection: 'row',
    height: 170,
    justifyContent: 'space-between',
    paddingRight: '2%',
    paddingVertical: 20,
  },
  rowContainer: {
    backgroundColor: 'white',
  },
  paddingLeft: {
    paddingLeft: 15,
  },
  image: {
    height: '100%',
    width: '30%',
    marginRight: 10,
  },
  details: {
    height: '100%',
    width: '68%',
  },
  marginT5: {
    marginTop: 10,
  },
  name: {
    color: Colors.primary,
    fontSize: normalize(16),
    fontWeight: 'bold',
    marginBottom: 10,
  },
  price: {
    fontSize: normalize(17),
    fontWeight: 'bold',
    marginBottom: 15,
  },
});

/* Export
============================================================================= */

export default CartItem;
