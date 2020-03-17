import React from 'react';
import { View, StyleSheet } from 'react-native';

import { Button } from 'components';
/* Typings
============================================================================= */

type Props = {
  handleSubmit: () => void;
};

/* ActionsBar
============================================================================= */

const ActionsBar: React.FC<Props> = ({ handleSubmit }) => (
  <View style={styles.container}>
    <Button
      title="Оформить Заказ"
      onPress={handleSubmit}
      containerStyle={styles.buttonContainer}
    />
  </View>
);

/* Default Props
============================================================================= */

ActionsBar.defaultProps = {
  handleSubmit: () => {}, // eslint-disable-line @typescript-eslint/no-empty-function
};

/* StyleSheet
============================================================================= */

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 15,
  },
  buttonContainer: {
    width: '100%',
  },
});

/* Export
============================================================================= */

export default ActionsBar;
