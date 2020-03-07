import reducer, { initialState, ProductsOverviewState } from '../reducer';
import actions from '../actions';
import {
  productOverviewListResponse,
  normalizedProductList,
  categoryListResponse,
  normalizedCategoryList,
} from '../testData';

describe('Products Overview Reducer', () => {
  test('Returns the initial state when unregistered action is passed', () => {
    const newState = reducer(undefined, { type: 'unregistered action' });
    expect(newState).toEqual(initialState);
  });

  test('Should handle Get Products Success action', () => {
    const {
      entities: { products },
      result,
    } = normalizedProductList;
    const expectedState: ProductsOverviewState = {
      ...initialState,
      products: {
        byId: products,
        ids: result,
      },
    };

    const newState = reducer(
      undefined,
      actions.getProductsAsync.success(productOverviewListResponse),
    );

    expect(newState).toEqual(expectedState);
  });

  test('Should handle Get Categories Success action', () => {
    const {
      entities: { categories },
      result,
    } = normalizedCategoryList;
    const newState = reducer(
      undefined,
      actions.getCategoriesAsync.success(categoryListResponse),
    );
    const expectedState: ProductsOverviewState = {
      ...initialState,
      categories: {
        byId: categories,
        ids: result,
      },
    };

    expect(newState).toEqual(expectedState);
  });
});
