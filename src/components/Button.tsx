import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Color from 'color';

import { Colors } from 'styles';
import { Text } from './Typography';

/* Typings
============================================================================= */

type Props = {
  onPress: () => void;
  title: string;
  disabled?: boolean;
};

/* Button
============================================================================= */

const Button: React.FC<Props> = ({
  title,
  onPress,
  disabled,
}): React.ReactElement => (
  <TouchableOpacity disabled={disabled} onPress={onPress}>
    <View style={[styles.button, disabled && styles.disabled]}>
      <Text style={styles.title}>{title}</Text>
    </View>
  </TouchableOpacity>
);

/* StyleSheet
============================================================================= */

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: Colors.secondary,
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
  disabled: {
    backgroundColor: Color(Colors.secondary)
      .lighten(0.7)
      .string(),
  },
});

/* Export
============================================================================= */

export default Button;
