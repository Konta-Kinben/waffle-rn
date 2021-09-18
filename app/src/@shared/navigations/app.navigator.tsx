import { DefaultTheme, NavigationContainer } from "@react-navigation/native"

import { HomeNavigator } from "./home.navigator"
import React from "react"

const navigatorTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent",
  },
};

export const AppNavigator = (): React.ReactElement => {
  return (
    <NavigationContainer theme={navigatorTheme}>
      <HomeNavigator />
    </NavigationContainer>
  );
};
