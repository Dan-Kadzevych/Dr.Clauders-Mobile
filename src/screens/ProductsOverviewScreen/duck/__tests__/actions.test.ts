import actions from '../actions';
import types from '../types';
import {
  productOverviewListResponse,
  normalizedProductList,
  categoryListResponse,
  normalizedCategoryList,
  error,
} from '../testData';

describe('Products Overview Actions', () => {
  describe('Get Products Async', () => {
    test('Get Products Request', () => {
      const action = actions.getProductsAsync.request();
      const expectedAction = {
        type: types.getProductsRequest,
      };

      expect(action).toEqual(expectedAction);
    });
    test('Get Products Success', () => {
      const action = actions.getProductsAsync.success(
        productOverviewListResponse,
      );
      const expectedAction = {
        type: types.getProductsSuccess,
        payload: normalizedProductList,
      };

      expect(action).toEqual(expectedAction);
    });
    test('Get Products Failure', () => {
      const action = actions.getProductsAsync.failure(error);
      const expectedAction = {
        type: types.getProductsFailure,
        payload: {
          error,
        },
      };

      expect(action).toEqual(expectedAction);
    });
  });

  describe('Get Categories Async', () => {
    test('Get Categories Request', () => {
      const action = actions.getCategoriesAsync.request();
      const expectedAction = {
        type: types.getCategoriesRequest,
      };

      expect(action).toEqual(expectedAction);
    });
    test('Get Categories Success', () => {
      const action = actions.getCategoriesAsync.success(categoryListResponse);
      const expectedAction = {
        type: types.getCategoriesSuccess,
        payload: normalizedCategoryList,
      };

      expect(action).toEqual(expectedAction);
    });
    test('Get Categories Failure', () => {
      const action = actions.getCategoriesAsync.failure(error);
      const expectedAction = {
        type: types.getCategoriesFailure,
        payload: {
          error,
        },
      };

      expect(action).toEqual(expectedAction);
    });
  });
});
