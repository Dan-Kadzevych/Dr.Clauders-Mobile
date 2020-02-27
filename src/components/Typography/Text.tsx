import React from 'react';
import { Text as NativeText, StyleSheet } from 'react-native';

import { Fonts } from 'styles';

/* Eslint Rules
============================================================================= */

/* eslint-disable react/jsx-props-no-spreading */

/* Text
============================================================================= */

const Text: React.FC<import('react-native').TextProps> = ({
  style,
  ...props
}) => <NativeText style={[styles.text, style && style]} {...props} />;

/* StyleSheet
============================================================================= */

const styles = StyleSheet.create({
  text: {
    fontFamily: Fonts.default,
  },
});

/* Export
============================================================================= */

export default Text;
