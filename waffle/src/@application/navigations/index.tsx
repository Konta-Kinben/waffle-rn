import { DefaultTheme, NavigationContainer } from "@react-navigation/native";

import { MainNavigator } from "./main.navigator";
import React from "react";

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
      <MainNavigator />
    </NavigationContainer>
  );
};
