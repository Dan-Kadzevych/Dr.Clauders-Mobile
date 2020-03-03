import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { Formik } from 'formik';

import { Button, Picker, Text } from 'components';
import { styles as pickerStyles } from 'components/Form/Picker';
import { Colors } from 'styles';
import { normalize } from 'utils/styles';
import { QTY_OPTIONS } from '../duck/constants';

/* Typings
============================================================================= */

type Props = {
  defaultPackageSizeValue: string;
  packageSizeOptions: import('FormTypes').OptionList;
  variations: import('ProductModels').ProductVariationsById;
};

/* AddToBagForm
============================================================================= */

const AddToBagForm: React.FC<Props> = ({
  defaultPackageSizeValue,
  packageSizeOptions,
  variations,
}) => (
  <Formik
    initialValues={{
      packageSize: defaultPackageSizeValue,
      quantity: '1',
    }}
    onSubmit={() => {
      Promise.resolve();
    }}
  >
    {({ values, handleSubmit }) => {
      const activePackageSizeVariation = variations[values.packageSize];

      return (
        <View style={styles.variationForm}>
          <View style={styles.formRow}>
            <Picker
              name="packageSize"
              items={packageSizeOptions}
              placeholder={{
                label: 'РАЗМЕР УПАКОВКИ',
                value: '',
              }}
            />
            <View style={styles.separator} />
            <Picker name="quantity" items={QTY_OPTIONS} placeholder={{}}>
              <TextInput
                style={[pickerStyles.inputIOS, pickerStyles.placeholder]}
                value={`КОЛ-ВО: ${values.quantity}`}
                editable={false}
              />
            </Picker>
          </View>
          <View style={styles.addToBagContainer}>
            {activePackageSizeVariation && (
              <Text style={styles.finalPrice}>
                {`₴${activePackageSizeVariation.price}`}
              </Text>
            )}
            <Button
              disabled={!activePackageSizeVariation}
              title="В Корзину"
              onPress={handleSubmit}
            />
          </View>
        </View>
      );
    }}
  </Formik>
);

const styles = StyleSheet.create({
  variationForm: {
    flex: 1,
  },
  formRow: {
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: Colors.geryLight,
    flex: 1,
    flexDirection: 'row',
    paddingVertical: 15,
  },
  separator: {
    backgroundColor: Colors.geryLight,
    height: '100%',
    marginHorizontal: 7,
    width: 1,
  },
  finalPrice: {
    fontSize: normalize(20),
    fontWeight: 'bold',
    marginBottom: 15,
  },
  addToBagContainer: {
    paddingHorizontal: 3,
    paddingVertical: 10,
  },
});

export default AddToBagForm;