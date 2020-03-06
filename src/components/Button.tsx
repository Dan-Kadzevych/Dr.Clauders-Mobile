import React from 'react';
import { StyleSheet } from 'react-native';
import { Button as RNEButton } from 'react-native-elements';
import Color from 'color';

import { Colors, Fonts } from 'styles';

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
  onPress,
  title,
  disabled,
}): React.ReactElement => (
  <RNEButton
    buttonStyle={styles.button}
    onPress={onPress}
    title={title}
    titleStyle={styles.title}
    disabled={disabled}
    disabledStyle={styles.disabled}
    disabledTitleStyle={styles.title}
  />
);

/* DefaultProps
============================================================================= */

Button.defaultProps = {
  onPress: () => {}, // eslint-disable-line @typescript-eslint/no-empty-function
  title: '',
  disabled: false,
};

/* StyleSheet
============================================================================= */

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: Colors.secondary,
    borderRadius: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 13,
  },
  title: {
    color: Colors.white,
    fontFamily: Fonts.default,
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
