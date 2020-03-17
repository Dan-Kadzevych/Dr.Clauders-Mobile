import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

import { Text } from 'components';
import { Colors } from 'styles';
import { normalize } from 'utils/styles';
import CartItemFields from './CartItemFields';

/* Typings
============================================================================= */

type Props = {
  id: string | number;
  imageUri: string;
  index: number;
  name: string;
  price: string | number;
};

/* CartItem
============================================================================= */

const CartItem: React.FC<Props> = ({ imageUri, name, price, id, index }) => (
  <View
    style={[styles.itemContainer, index > 0 && styles.marginT5]}
    // handlePress={() =>
    //   navigation.navigate('ProductDetails', {
    //     productId: item.id,
    //   })
    // }
  >
    <Image source={{ uri: imageUri }} style={styles.image} />
    <View style={styles.details}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.price}>₴{price}</Text>
      <CartItemFields itemId={id} />
    </View>
  </View>
);

/* Default Props
============================================================================= */

CartItem.defaultProps = {
  id: '',
  imageUri: '',
  index: 0,
  name: '',
  price: '',
};

/* StyleSheet
============================================================================= */

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContainer: {
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  itemContainer: {
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderRadius: 10,
    flex: 1,
    flexDirection: 'row',
    height: 150,
    justifyContent: 'space-between',
    paddingRight: '2%',
    shadowColor: Colors.black,
    shadowOffset: { height: 0, width: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 2,
  },
  image: {
    height: '80%',
    width: '30%',
  },
  details: {
    height: '100%',
    paddingVertical: 20,
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
  description: {
    fontSize: normalize(14),
    marginBottom: 10,
  },
  price: {
    fontSize: normalize(18),
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

/* Export
============================================================================= */

export default CartItem;
