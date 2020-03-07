import React from 'react';
import { View, StyleSheet } from 'react-native';

import { Text } from 'components';
import { Colors } from 'styles';
import { normalize } from 'utils/styles';

/* Typings
============================================================================= */

type Props = {
  name: string;
  priceRange: string;
  subtitle?: string;
};

/* InfoContainer
============================================================================= */

const Info: React.FC<Props> = ({ name, priceRange, subtitle }) => (
  <View style={styles.info}>
    <Text style={styles.subtitle}>{name}</Text>
    {subtitle && <Text style={styles.shortDescription}>{subtitle}</Text>}
    <Text style={styles.priceRange}>{priceRange}</Text>
  </View>
);

/* DefaultProps
============================================================================= */

Info.defaultProps = {
  name: '',
  priceRange: '',
  subtitle: '',
};

/* StyleSheet
============================================================================= */

const styles = StyleSheet.create({
  info: {
    borderBottomWidth: 1,
    borderColor: Colors.geryLight,
    flex: 1,
    paddingVertical: 15,
  },
  priceRange: {
    fontSize: normalize(20),
    fontWeight: 'bold',
  },
  subtitle: {
    color: Colors.primary,
    fontFamily: 'Lato',
    fontSize: normalize(17),
    fontWeight: 'bold',
    marginBottom: 7,
  },
  shortDescription: {
    fontSize: normalize(15),
    marginBottom: 7,
  },
});

/* Export
============================================================================= */

export default Info;
