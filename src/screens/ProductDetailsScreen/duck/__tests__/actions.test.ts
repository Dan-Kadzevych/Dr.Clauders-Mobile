import actions from '../actions';
import types from '../types';
import testData from '../testData';

describe('Products Details Actions', () => {
  describe('Get Product Details Async', () => {
    test('Get Product Details Request', () => {
      const action = actions.getProductDetailsAsync.request();
      const expectedAction = {
        type: types.getProductDetailsRequest,
      };

      expect(action).toEqual(expectedAction);
    });
    test('Get Products Details Success', () => {
      const action = actions.getProductDetailsAsync.success(
        testData.productDetailsResponse,
      );

      const expectedAction = {
        type: types.getProductDetailsSuccess,
        payload: testData.normalizedProductDetails,
      };

      expect(action).toEqual(expectedAction);
    });
    test('Get Products Details Failure', () => {
      const action = actions.getProductDetailsAsync.failure(testData.error);
      const expectedAction = {
        type: types.getProductDetailsFailure,
        payload: {
          error: testData.error,
        },
      };

      expect(action).toEqual(expectedAction);
    });
  });

  describe('Get Product Variations Async', () => {
    test('Get Product Variations Request', () => {
      const action = actions.getProductVariationsAsync.request();
      const expectedAction = {
        type: types.getProductVariationsRequest,
      };

      expect(action).toEqual(expectedAction);
    });
    test('Get Products Variations Success', () => {
      const action = actions.getProductVariationsAsync.success(
        testData.productVariationListResponse,
        testData.productId,
      );

      const expectedAction = {
        type: types.getProductVariationsSuccess,
        payload: testData.normalizedProductVariations,
      };

      expect(action).toEqual(expectedAction);
    });
    test('Get Products Variations Failure', () => {
      const action = actions.getProductVariationsAsync.failure(testData.error);
      const expectedAction = {
        type: types.getProductVariationsFailure,
        payload: {
          error: testData.error,
        },
      };

      expect(action).toEqual(expectedAction);
    });
  });

  test('Clear Product Details Request', () => {
    const action = actions.clearProductDetails(
      testData.productId,
      testData.variationIds,
    );
    const expectedAction = {
      type: types.clearProductDetails,
      payload: {
        productId: testData.productId,
        variationIds: testData.variationIds,
      },
    };

    expect(action).toEqual(expectedAction);
  });
});
