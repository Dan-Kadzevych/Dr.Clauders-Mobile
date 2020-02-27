import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';

import { Colors } from 'styles';
import { Text } from './Typography';

/* Typings
============================================================================= */

type Props = {
  onPress: () => void;
  title: string;
};

/* Button
============================================================================= */

const Button: React.FC<Props> = ({ title, onPress }): React.ReactElement => (
  <TouchableOpacity onPress={onPress}>
    <View style={styles.button}>
      <Text style={styles.title}>{title}</Text>
    </View>
  </TouchableOpacity>
);

/* StyleSheet
============================================================================= */

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#f96d0c',
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 13,
  },
  title: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: '700',
    paddingBottom: 1,
    paddingTop: 2,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
});

/* Export
============================================================================= */

export default Button;
