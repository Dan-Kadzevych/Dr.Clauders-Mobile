declare module 'NavigatorModels' {
  import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

  export type RootBottomTabParamList = {
    Products: undefined;
    Favourites: undefined;
  };

  export type Navigation<
    Route extends keyof RootBottomTabParamList
  > = BottomTabNavigationProp<RootBottomTabParamList, Route>;
}
