const Stack = createStackNavigator();

import Home from "../../@features/screens/Home";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

export const MainNavigator = (): React.ReactElement => (
  <Stack.Navigator
    screenOptions={{ gestureEnabled: false, headerShown: false }}
    initialRouteName="HOME_DRAWER"
  >
    <Stack.Screen name={"HOME_DRAWER"} component={Home} />
  </Stack.Navigator>
);
