import React from 'react';
import {
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import { Colors } from 'styles';
import { normalize } from 'utils/styles';
import Text from './Typography/Text';

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
}): React.ReactElement => (
  <TouchableWithoutFeedback onPress={handlePress}>
    <View style={[styles.container, index > 0 && styles.marginT5]}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.price}>{price}</Text>
      </View>
    </View>
  </TouchableWithoutFeedback>
);

/* Default Props
============================================================================= */

ProductItem.defaultProps = {
  description: '',
  image: '',
  index: 0,
  name: '',
  handlePress: () => {}, // eslint-disable-line @typescript-eslint/no-empty-function
  price: '',
};

/* StyleSheet
============================================================================= */

const styles = StyleSheet.create({
  container: {
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
  details: {
    justifyContent: 'space-between',
    width: '68%',
  },
  image: {
    height: '80%',
    width: '30%',
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
  },
});

/* Export
============================================================================= */

export default ProductItem;
