import reducer, { initialState, ProductDetailsState } from '../reducer';
import actions from '../actions';
import testData from '../testData';

describe('Products Details Reducer', () => {
  test('Returns the initial state when unregistered action is passed', () => {
    const newState = reducer(undefined, { type: 'unregistered action' });
    expect(newState).toEqual(initialState);
  });

  test('Should handle Get Product Details Success action', () => {
    const {
      entities: { product },
      result,
    } = testData.normalizedProductDetails;
    const expectedState: ProductDetailsState = {
      ...initialState,
      products: {
        byId: product,
        ids: [result],
      },
    };

    const newState = reducer(
      undefined,
      actions.getProductDetailsAsync.success(testData.productDetailsResponse),
    );

    expect(newState).toEqual(expectedState);
  });

  test('Should handle Get Variations Success action', () => {
    const {
      entities: { variations },
      result,
    } = testData.normalizedProductVariations;
    const expectedState: ProductDetailsState = {
      ...initialState,
      variations: {
        byId: variations,
        ids: result,
      },
    };

    const newState = reducer(
      undefined,
      actions.getProductVariationsAsync.success(
        testData.productVariationListResponse,
        testData.productId,
      ),
    );

    expect(newState).toEqual(expectedState);
  });

  test('Should handle Clear Product Details Success action', () => {
    const {
      entities: { variations },
      result,
    } = testData.normalizedProductVariations;
    const {
      entities: { product },
      result: productDetailsId,
    } = testData.normalizedProductDetails;
    const expectedState: ProductDetailsState = initialState;
    const reducerState: ProductDetailsState = {
      products: {
        byId: product,
        ids: [productDetailsId],
      },
      variations: {
        byId: variations,
        ids: result,
      },
    };

    const newState = reducer(
      reducerState,
      actions.clearProductDetails(testData.productId, testData.variationIds),
    );

    expect(newState).toEqual(expectedState);
  });
});
