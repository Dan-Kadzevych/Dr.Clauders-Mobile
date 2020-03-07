import React from 'react';
import { Provider } from 'react-redux';
import 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import AppNavigator from 'navigation/AppNavigator';
import store from 'store';

/* App
============================================================================= */

const App = () => (
  <SafeAreaProvider>
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  </SafeAreaProvider>
);

/* Export
============================================================================= */

export default App;
