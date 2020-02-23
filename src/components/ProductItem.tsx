import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

/* Typings
============================================================================= */

type Props = {
  description: string;
  image: string;
  index: number;
  name: string;
  handlePress: () => void;
  price: string;
};

/* ProductItem
============================================================================= */

const ProductItem: React.FC<Props> = ({
  description,
  image,
  index,
  name,
  handlePress,
  price,
}) => (
  <TouchableWithoutFeedback onPress={handlePress}>
    <View style={[styles.container, index > 0 && styles.marginT5]}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.name}>{name}</Text>
        <Text>{description}</Text>
        <Text style={styles.price}>{price}</Text>
      </View>
    </View>
  </TouchableWithoutFeedback>
);

/* StyleSheet
============================================================================= */

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    flex: 1,
    flexDirection: 'row',
    height: 150,
    justifyContent: 'space-between',
    paddingRight: '2%',
    shadowColor: '#000',
    shadowOffset: { height: 0, width: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 2,
  },
  details: {
    height: '70%',
    justifyContent: 'space-between',
    width: '68%',
  },
  image: {
    height: '80%',
    resizeMode: 'contain',
    width: '30%',
  },
  marginT5: {
    marginTop: 10,
  },
  name: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

/* Export
============================================================================= */

export default ProductItem;
