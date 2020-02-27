import React from 'react';
import { Text as NativeText, StyleSheet } from 'react-native';

import { Fonts } from 'styles';
import { normalize } from 'utils/styles';

/* Eslint Rules
============================================================================= */

/* eslint-disable react/jsx-props-no-spreading */

/* P
============================================================================= */

const P: React.FC<import('react-native').TextProps> = ({ style, ...props }) => (
  <NativeText style={[styles.text, style && style]} {...props} />
);

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

export default P;
