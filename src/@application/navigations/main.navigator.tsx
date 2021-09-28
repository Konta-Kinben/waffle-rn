const Stack = createStackNavigator();

import Login from '../../@features/auth/screens/Login';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

export const MainNavigator = (): React.ReactElement => (
  <Stack.Navigator
    screenOptions={{gestureEnabled: false}}
    initialRouteName="HOME_DRAWER">
    <Stack.Screen name={'HOME_DRAWER'} component={Login} />
  </Stack.Navigator>
);
