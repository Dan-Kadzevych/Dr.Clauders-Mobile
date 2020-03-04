import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { useField } from 'formik';
import RNPickerSelect from 'react-native-picker-select';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import { Colors, Fonts } from 'styles';
import { normalize } from 'utils/styles';

/* Typings
============================================================================= */

type Props = {
  name: string;
  items: import('FormTypes').OptionList;
  placeholder: Partial<import('FormTypes').Option>;
  prefix?: string;
};

/* Picker
============================================================================= */

const ChevronIcon: React.FC = () => (
  <FontAwesome5 name="chevron-down" size={13} brand />
);

const Picker: React.FC<Props> = ({
  name,
  items,
  placeholder,
  children,
  prefix,
}) => {
  const [field] = useField(name);

  if (children) {
    return (
      <RNPickerSelect
        doneText="Выбрать"
        Icon={ChevronIcon}
        items={items}
        onValueChange={field.onChange(field.name)}
        placeholder={placeholder}
        style={styles}
        value={field.value}
      >
        {children}
      </RNPickerSelect>
    );
  }

  return (
    <RNPickerSelect
      doneText="Выбрать"
      Icon={ChevronIcon}
      items={items}
      onValueChange={field.onChange(field.name)}
      placeholder={placeholder}
      style={styles}
      value={field.value}
    >
      {prefix && (
        <>
          <TextInput
            style={[styles.inputIOS, styles.placeholder]}
            value={`${prefix} ${field.value}`}
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
