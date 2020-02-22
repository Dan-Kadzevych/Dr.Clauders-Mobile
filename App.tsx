import React from 'react';
import { Provider } from 'react-redux';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import AppNavigator from 'AppNavigator';
import store from './src/store';

/* App
============================================================================= */

const App = () => (
  <SafeAreaProvider>
    <Provider store={store}>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </Provider>
  </SafeAreaProvider>
);

/* Export
============================================================================= */

export default App;
