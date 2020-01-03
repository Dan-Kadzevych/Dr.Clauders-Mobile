import React from 'react';
import { Provider } from 'react-redux';
import 'react-native-gesture-handler';

import store from './src/store';
import AppNavigator from './src/navigatior';

const App = () => (
  <Provider store={store}>
    <AppNavigator />
  </Provider>
);

export default App;
