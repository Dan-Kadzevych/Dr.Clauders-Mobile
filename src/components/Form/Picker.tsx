import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { useField } from 'formik';
import RNPickerSelect from 'react-native-picker-select';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import { Colors, Fonts } from 'styles';
import { normalize } from 'utils/styles';

/* Eslint Rules
============================================================================= */

/* eslint-disable react/jsx-props-no-spreading */

/* Typings
============================================================================= */

type Props = {
  name: string;
  items: import('FormTypes').OptionList;
  onChange?: (v: string | number) => void;
  placeholder: Partial<import('FormTypes').Option>;
  prefix?: string;
};

/* Picker
============================================================================= */

const ChevronIcon: React.FC = () => (
  <FontAwesome5 name="chevron-down" size={13} />
);

const Picker: React.FC<Props> = ({
  name,
  items,
  onChange,
  placeholder,
  children,
  prefix,
}) => {
  const [field, , helpers] = useField(name);
  const pickerProps = {
    doneText: 'Выбрать',
    Icon: ChevronIcon,
    items,
    onValueChange: (v: string | number) => {
      onChange && onChange(v);
      helpers.setValue(v);
    },
    placeholder,
    style: styles,
    value: field.value,
  };

  if (children) {
    return <RNPickerSelect {...pickerProps}>{children}</RNPickerSelect>;
  }

  return (
    <RNPickerSelect {...pickerProps}>
      {prefix && (
        <>
          <TextInput
            style={[styles.inputIOS, styles.placeholder]}
            value={`${prefix}${field.value}`}
            editable={false}
          />
          <View style={styles.iconContainer}>
            <ChevronIcon />
          </View>
        </>
      )}
    </RNPickerSelect>
  );
};

/* Default Props
============================================================================= */

Picker.defaultProps = {
  name: '',
  items: [],
  onChange: () => {}, // eslint-disable-line @typescript-eslint/no-empty-function
  placeholder: {},
  prefix: '',
};

/* StyleSheet
============================================================================= */

export const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  placeholder: {
    color: Colors.black,
    fontFamily: Fonts.default,
    fontSize: normalize(14),
    fontWeight: '500',
  },
  inputIOSContainer: {
    justifyContent: 'center',
  },
  inputIOS: {
    color: Colors.black,
    fontFamily: Fonts.default,
    fontSize: normalize(14),
    fontWeight: '500',
    padding: 5,
  },
  iconContainer: {
    position: 'absolute',
    right: 0,
  },
});

/* Export
============================================================================= */

export default Picker;
