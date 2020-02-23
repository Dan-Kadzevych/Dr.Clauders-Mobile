declare module 'NavigatorModels' {
  import { CompositeNavigationProp, RouteProp } from '@react-navigation/native';
  import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
  import { StackNavigationProp } from '@react-navigation/stack';

  /* Store Typings
============================================================================= */

  export type StoreBottomTabParamList = {
    Products: undefined;
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

  export type ProductsNavigationProp = CompositeNavigationProp<
    StackNavigationProp<ProductsStackParamList, 'ProductsOverview'>,
    StoreNavigationProp
  >;

  export type ProductsRouteProp<
    Route extends keyof ProductsStackParamList
  > = RouteProp<ProductsStackParamList, Route>;
}
