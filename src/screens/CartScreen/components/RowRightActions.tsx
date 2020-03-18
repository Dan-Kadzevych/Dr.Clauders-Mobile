import React from 'react';
import { View, StyleSheet, Animated } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import { Button } from 'components';
import { Colors } from 'styles';
import { normalize } from 'utils/styles';

/* Typings
============================================================================= */

type Props = {
  progress: Animated.AnimatedInterpolation;
  handleRemove: () => void;
};

/* RowRightActions
============================================================================= */

const RowRightActions: React.FC<Props> = ({ progress, handleRemove }) => {
  const trans = progress.interpolate({
    inputRange: [0, 1],
    outputRange: [120, 0],
  });

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.animatedContainer,
          { transform: [{ translateX: trans }] },
        ]}
      >
        <Button
          buttonStyle={styles.deleteButtonStyle}
          icon={() => (
            <FontAwesome5
              name="times"
              color={Colors.white}
              size={normalize(30)}
            />
          )}
          onPress={handleRemove}
        />
      </Animated.View>
    </View>
  );
};

/* StyleSheet
============================================================================= */

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: 120,
  },
  animatedContainer: {
    flex: 1,
  },
  deleteButtonStyle: {
    backgroundColor: Colors.red,
    height: '100%',
  },
});

/* Export
============================================================================= */

export default RowRightActions;
