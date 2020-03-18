import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';

import { Picker } from 'components';
import { QTY_OPTIONS } from 'utils/constants';
import { cartOperations } from '../duck';

/* Typings
============================================================================= */

type Props = {
  itemId: number | string;
};

/* CartItemForm
============================================================================= */

const CartItemFields: React.FC<Props> = ({ itemId }) => {
  const dispatch = useDispatch();

  return (
    <View style={styles.formFields}>
      <View style={styles.formRow}>
        <View style={styles.formCol}>
          <Picker
            name={`quantityById.${itemId}`}
            items={QTY_OPTIONS}
            onChange={value => {
              dispatch(
                cartOperations.updateCartQuantity({
                  [itemId]: Number(value),
                }),
              );
            }}
            placeholder={{}}
            prefix="КОЛ-ВО: "
          />
        </View>
      </View>
    </View>
  );
};

/* Default Props
============================================================================= */

CartItemFields.defaultProps = {
  itemId: '',
};

/* StyleSheet
============================================================================= */

const styles = StyleSheet.create({
  formFields: {
    marginTop: 'auto',
  },
  formRow: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  formCol: {
    flexDirection: 'row',
    height: '100%',
    width: '50%',
  },
});

/* Export
============================================================================= */

export default CartItemFields;
