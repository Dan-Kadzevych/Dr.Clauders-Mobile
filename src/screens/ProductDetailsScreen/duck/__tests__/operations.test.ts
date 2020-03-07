import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import types from '../types';
import operations from '../operations';
import testData from '../testData';

describe('Product Details Operations', () => {
  const mockStore = configureMockStore<
    import('MyTypes').RootState,
    import('TestTypes').DispatchExts
  >([thunk]);

  describe('Get Product Details', () => {
    test('Should dispatch correct actions on success', async () => {
      const store = mockStore();
      const expectedActionTypes = [
        types.getProductDetailsRequest,
        types.getProductDetailsSuccess,
      ];

      await store.dispatch(operations.getProductDetails(testData.productId));

      const actions = store.getActions();
      const actionTypes = actions.map(action => action.type);

      expect(actionTypes).toEqual(expectedActionTypes);
    });
  });

  describe('Get Product Variations', () => {
    test('Should dispatch correct actions on success', async () => {
      const store = mockStore();
      const expectedActionTypes = [
        types.getProductVariationsRequest,
        types.getProductVariationsSuccess,
      ];

      await store.dispatch(operations.getProductVariations(testData.productId));

      const actions = store.getActions();
      const actionTypes = actions.map(action => action.type);

      expect(actionTypes).toEqual(expectedActionTypes);
    });
  });

  describe('Add To Cart', () => {
    test('Should dispatch correct actions on success', async () => {
      const store = mockStore();
      const expectedActionTypes = [
        types.addToCartRequest,
        types.addToCartSuccess,
      ];

      await store.dispatch(operations.addToCart(testData.cartProduct));

      const actions = store.getActions();
      const actionTypes = actions.map(action => action.type);

      expect(actionTypes).toEqual(expectedActionTypes);
    });
  });
  describe('Clear Product Details', () => {
    test('Should dispatch correct actions on success', async () => {
      const store = mockStore();
      const expectedActionTypes = [types.clearProductDetails];

      await store.dispatch(operations.clearProductDetails(testData.productId));

      const actions = store.getActions();
      const actionTypes = actions.map(action => action.type);

      expect(actionTypes).toEqual(expectedActionTypes);
    });
  });
});
