import React from 'react';
import { Text, StyleSheet } from 'react-native';

import { Fonts } from 'styles';
import { normalize } from 'utils/styles';

/* Eslint Rules
============================================================================= */

/* eslint-disable react/jsx-props-no-spreading */

/* H3
============================================================================= */

const H3: React.FC<import('react-native').TextProps> = ({
  style,
  ...props
}) => <Text style={[styles.text, style && style]} {...props} />;

/* StyleSheet
============================================================================= */

const styles = StyleSheet.create({
  text: {
    fontFamily: Fonts.default,
    fontSize: normalize(17),
  },
});

/* Export
============================================================================= */

export default H3;
