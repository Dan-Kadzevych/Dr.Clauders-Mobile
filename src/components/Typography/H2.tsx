import React from 'react';
import { Text, StyleSheet } from 'react-native';

import { Colors, Fonts } from 'styles';
import { normalize } from 'utils/styles';

/* Eslint Rules
============================================================================= */

/* eslint-disable react/jsx-props-no-spreading */

/* H2
============================================================================= */

const H2: React.FC<import('react-native').TextProps> = ({
  style,
  ...props
}) => <Text style={[styles.text, style && style]} {...props} />;

/* StyleSheet
============================================================================= */

const styles = StyleSheet.create({
  text: {
    color: Colors.primary,
    fontFamily: Fonts.default,
    fontSize: normalize(23),
  },
});

/* Export
============================================================================= */

export default H2;
