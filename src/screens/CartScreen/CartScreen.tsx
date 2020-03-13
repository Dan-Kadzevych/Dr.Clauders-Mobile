import React from 'react';
import { Image, View, StyleSheet, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { Formik } from 'formik';

import { Text, Picker, Button } from 'components';
import { Colors } from 'styles';
import { normalize } from 'utils/styles';
import { QTY_OPTIONS } from 'screens/ProductDetailsScreen/duck/constants';
import { cartSelectors, cartOperations } from './duck';

/* Typings
============================================================================= */

type Props = {};

/* CartScreen
============================================================================= */

const CartScreen: React.FC<Props> = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(cartSelectors.getCartItems);
  const quantityById = useSelector(cartSelectors.getQuantityById);

  if (!cartItems || !Object.keys(quantityById).length) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={styles.container}>
      <Formik
        initialValues={{ quantity: quantityById }}
        enableReinitialize
        onSubmit={v => Promise.resolve(v)}
      >
        {({ values, handleSubmit }) => (
          <View style={styles.container}>
            <View style={styles.totalBar}>
              <Text>
                {cartItems.length}
                товаров на сумму{' '}
              </Text>
              <Text style={styles.totalPrice}>
                ₴
                {cartItems.reduce(
                  (acc: number, { price, id }) =>
                    acc + Number(price) * Number(values.quantity[id]),
                  0,
                )}
              </Text>
            </View>
            <FlatList
              contentContainerStyle={styles.listContainer}
              data={cartItems}
              keyExtractor={item => item.id.toString()}
              renderItem={({ item, index }) => (
                <View
                  style={[styles.itemContainer, index > 0 && styles.marginT5]}
                  // handlePress={() =>
                  //   navigation.navigate('ProductDetails', {
                  //     productId: item.id,
                  //   })
                  // }
                >
                  <Image source={{ uri: item.image }} style={styles.image} />
                  <View style={styles.details}>
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={styles.price}>₴{item.price}</Text>
                    <View style={styles.formFields}>
                      <View style={styles.formRow}>
                        <View style={styles.formCol}>
                          <Picker
                            name={`quantity.${item.id}`}
                            items={QTY_OPTIONS}
                            onChange={v => {
                              dispatch(
                                cartOperations.updateCartQuantity({
                                  [item.id]: v,
                                }),
                              );
                            }}
                            placeholder={{}}
                            prefix="КОЛ-ВО: "
                          />
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              )}
            />
            <View style={styles.actionBar}>
              <Button
                title="Оформить Заказ"
                onPress={handleSubmit}
                containerStyle={styles.buttonContainer}
              />
            </View>
          </View>
        )}
      </Formik>
    </View>
  );
};

/* StyleSheet
============================================================================= */

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContainer: {
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  itemContainer: {
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderRadius: 10,
    flex: 1,
    flexDirection: 'row',
    height: 150,
    justifyContent: 'space-between',
    paddingRight: '2%',
    shadowColor: Colors.black,
    shadowOffset: { height: 0, width: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 2,
  },
  image: {
    height: '80%',
    width: '30%',
  },
  details: {
    width: '68%',
    height: '100%',
    paddingVertical: 20,
  },
  marginT5: {
    marginTop: 10,
  },
  name: {
    color: Colors.primary,
    fontSize: normalize(16),
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: normalize(14),
    marginBottom: 10,
  },
  price: {
    fontSize: normalize(18),
    fontWeight: 'bold',
    marginBottom: 10,
  },
  formFields: {
    marginTop: 'auto',
  },
  formRow: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  formCol: {
    width: '50%',
    height: '100%',
    flexDirection: 'row',
  },
  totalBar: {
    backgroundColor: 'white',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: Colors.geryLight,
  },
  totalText: {
    fontWeight: '500',
  },
  totalPrice: {
    fontSize: normalize(14),
    fontWeight: 'bold',
  },
  actionBar: {
    backgroundColor: 'white',
    // height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    flexDirection: 'row',
  },
  buttonContainer: {
    width: '100%',
  },
});

/* Export
============================================================================= */

export default CartScreen;
