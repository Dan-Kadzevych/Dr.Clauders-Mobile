import React from 'react';
import { StyleSheet } from 'react-native';
import { Text as RNEText } from 'react-native-elements';

import { Fonts } from 'styles';

/* Eslint Rules
============================================================================= */

/* eslint-disable react/jsx-props-no-spreading */

/* Text
============================================================================= */

const Text: React.FC<import('react-native').TextProps> = ({
  style,
  ...props
}) => <RNEText style={[styles.text, style && style]} {...props} />;

/* Default Props
============================================================================= */

Text.defaultProps = {
  style: undefined,
};

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
