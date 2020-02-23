import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import StoreNavigator from './StoreNavigator';

/* AppNavigator
============================================================================= */

const AppNavigator: React.FC = () => (
  <NavigationContainer>
    <StoreNavigator />
  </NavigationContainer>
);

/* Export
============================================================================= */

export default AppNavigator;
