import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import types from '../types';
import operations from '../operations';

describe('Products Overview Operations', () => {
  const mockStore = configureMockStore<
    undefined,
    import('TestTypes').DispatchExts
  >([thunk]);

  describe('Get Products', () => {
    test('Should dispatch correct actions on success', async () => {
      const store = mockStore();
      const expectedActionTypes = [
        types.getProductsRequest,
        types.getProductsSuccess,
      ];

      await store.dispatch(operations.getProducts());

      const actions = store.getActions();
      const actionTypes = actions.map(action => action.type);

      expect(actionTypes).toEqual(expectedActionTypes);
    });
  });

  describe('Get Categories', () => {
    test('Should dispatch correct actions on success', async () => {
      const store = mockStore();
      const expectedActionTypes = [
        types.getCategoriesRequest,
        types.getCategoriesSuccess,
      ];

      await store.dispatch(operations.getCategories());

      const actions = store.getActions();
      const actionTypes = actions.map(action => action.type);

      expect(actionTypes).toEqual(expectedActionTypes);
    });
  });
});
