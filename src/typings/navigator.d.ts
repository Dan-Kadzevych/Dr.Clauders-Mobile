declare module 'NavigatorModels' {
  import { CompositeNavigationProp, RouteProp } from '@react-navigation/native';
  import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
  import { StackNavigationProp } from '@react-navigation/stack';

  /* Store Typings
============================================================================= */
  export type Route = import('@react-navigation/routers').Route<string> & {
    state?:
      | import('@react-navigation/native').NavigationState
      | import('@react-navigation/routers').PartialState<
          import('@react-navigation/native').NavigationState
        >;
  };

  export type RouteList = Route[];

  /* Store Typings
============================================================================= */

  export type StoreBottomTabParamList = {
    Products: undefined;
    Cart: undefined;
    Favourites: undefined;
  };

  export type StoreNavigationProp<
    Route = undefined
  > = Route extends keyof StoreBottomTabParamList
    ? BottomTabNavigationProp<StoreBottomTabParamList, Route>
    : BottomTabNavigationProp<StoreBottomTabParamList>;

  /* Products Typings
============================================================================= */

  export type ProductsStackParamList = {
    ProductsOverview: undefined;
    ProductDetails: { productId: number };
  };

  export type ProductsNavigationProp<
    Screen extends keyof ProductsStackParamList
  > = CompositeNavigationProp<
    StackNavigationProp<ProductsStackParamList, Screen>,
    StoreNavigationProp
  >;

  export type ProductsRouteProp<
    Route extends keyof ProductsStackParamList
  > = RouteProp<ProductsStackParamList, Route>;

  /* Cart Typings
============================================================================= */

  export type CartStackParamList = {
    CartOverview: undefined;
    ProductDetails: { productId: number };
  };
}
