import React from 'react';
import { StyleSheet } from 'react-native';
import { useField } from 'formik';
import RNPickerSelect from 'react-native-picker-select';

import { Colors, Fonts } from 'styles';
import { normalize } from 'utils/styles';

/* Typings
============================================================================= */

type Props = {
  name: string;
  items: import('FormTypes').OptionList;
  placeholder: Partial<import('FormTypes').Option>;
};

/* Picker
============================================================================= */

const Picker: React.FC<Props> = ({ name, items, placeholder, children }) => {
  const [field] = useField(name);

  return (
    <RNPickerSelect
      doneText="Выбрать"
      items={items}
      onValueChange={field.onChange(field.name)}
      placeholder={placeholder}
      style={styles}
      value={field.value}
    >
      {children}
    </RNPickerSelect>
  );
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
  inputIOS: {
    color: Colors.black,
    fontFamily: Fonts.default,
    fontSize: normalize(14),
    fontWeight: '500',
    padding: 5,
  },
});

/* Export
============================================================================= */

export default Picker;
