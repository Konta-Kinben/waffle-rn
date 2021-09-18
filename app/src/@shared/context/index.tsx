import * as eva from '@eva-design/eva'

import {
	AppLoading,
	LoadFontsTask,
	Task
} from '../components/app-loading.component'
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components'
import React, { useState } from 'react'

import { AppearanceProvider } from 'react-native-appearance'
import { EvaIconsPack } from '@ui-kitten/eva-icons'
import { QueryClientProvider } from 'react-query'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { default as appTheme } from '../components/app-theme.json'
import { default as mapping } from '../components/app-mapping-eva.json'
import { queryClient } from '../config'

;
;

;
;
;
;
;
;
export const ThemeContext = React.createContext({
  theme: 'light',
  toggleTheme: () => {},
});

const loadingTasks: Task[] = [
  () =>
    LoadFontsTask({
      'opensans-regular': require('../assets/fonts/opensans-regular.ttf'),
      'roboto-regular': require('../assets/fonts/roboto-regular.ttf'),
      OpenSansBold: require('../assets/fonts/OpenSans-Bold.ttf'),
    }),
];
const defaultConfig: {mapping: any; theme: any} = {
  mapping: 'eva',
  theme: 'dark',
};
//? Root Layer Provider
type AppProviderProps = {
  children: React.ReactNode;
};
export const AppProvider = ({children}: AppProviderProps) => {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
  };
  return (
    <AppLoading tasks={loadingTasks} initialConfig={defaultConfig}>
      {props => (
        <>
          <QueryClientProvider client={queryClient}>
            <IconRegistry icons={[EvaIconsPack]} />
            <AppearanceProvider>
              <ThemeContext.Provider value={{theme, toggleTheme}}>
                <ApplicationProvider
                  {...eva}
                  theme={{...eva[theme], ...appTheme}}
                  //@ts-ignore
                  customMapping={mapping}>
                  <SafeAreaProvider>{children}</SafeAreaProvider>
                </ApplicationProvider>
              </ThemeContext.Provider>
            </AppearanceProvider>
          </QueryClientProvider>
        </>
      )}
    </AppLoading>
  );
};
//? Theme Context ex:Dark,Light
