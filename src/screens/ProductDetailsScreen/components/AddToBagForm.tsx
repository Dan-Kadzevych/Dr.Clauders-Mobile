import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import * as Yup from 'yup';

import { Button, Picker, Text } from 'components';
import { Colors } from 'styles';
import { normalize } from 'utils/styles';
import { QTY_OPTIONS } from '../duck/constants';
import { addToCart } from '../duck/operations';

/* Typings
============================================================================= */

type Props = {
  defaultPackageSizeValue: string;
  packageSizeOptions: import('FormTypes').OptionList;
  variations: import('ProductModels').ProductVariationsById;
};

/* Form Validation
============================================================================= */

const AddToBagSchema = Yup.object().shape({
  packageSize: Yup.string().required('Обязательное'),
  quantity: Yup.number()
    .min(1, 'Слишком Мало!')
    .max(10, 'Слишком Много!')
    .required('Обязательное'),
});

/* AddToBagForm
============================================================================= */

const AddToBagForm: React.FC<Props> = ({
  defaultPackageSizeValue,
  packageSizeOptions,
  variations,
}) => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{
        packageSize: defaultPackageSizeValue,
        quantity: 1,
      }}
      validationSchema={AddToBagSchema}
      onSubmit={async ({ packageSize: id, quantity }) =>
        dispatch(addToCart({ id, quantity }))
      }
    >
      {({ values, handleSubmit, isSubmitting, isValid }) => {
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
              <Picker
                name="quantity"
                items={QTY_OPTIONS}
                placeholder={{}}
                prefix="КОЛ-ВО: "
              />
            </View>
            <View style={styles.addToBagContainer}>
              {activePackageSizeVariation && (
                <Text style={styles.finalPrice}>
                  {`₴${activePackageSizeVariation.price}`}
                </Text>
              )}
              <Button
                disabled={!isValid || isSubmitting}
                title="В Корзину"
                onPress={handleSubmit}
              />
            </View>
          </View>
        );
      }}
    </Formik>
  );
};

/* DefaultProps
============================================================================= */

AddToBagForm.defaultProps = {
  defaultPackageSizeValue: '',
  packageSizeOptions: [],
  variations: {},
};

/* StyleSheet
============================================================================= */

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

/* Export
============================================================================= */

export default AddToBagForm;
