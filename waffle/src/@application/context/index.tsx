import * as eva from '@eva-design/eva';

import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import React, {useState} from 'react';

import {AppearanceProvider} from 'react-native-appearance';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import {QueryClientProvider} from 'react-query';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {default as appTheme} from '../components/app-theme.json';
import {default as mapping} from '../components/app-mapping-eva.json';
import {queryClient} from '../config';

export const ThemeContext = React.createContext({
  theme: 'light',
  toggleTheme: () => {},
});

//? Root Layer Provider
type AppProviderProps = {
  children: React.ReactNode;
};
export const AppProvider = ({children}: AppProviderProps) => {
  const [theme, setTheme] = useState<any>('light');
  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
  };
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <IconRegistry icons={[EvaIconsPack]} />
        <AppearanceProvider>
          <ThemeContext.Provider value={{theme, toggleTheme}}>
            <ApplicationProvider
              {...eva}
              theme={{...eva[theme], ...appTheme} as any}
              //@ts-ignore
              customMapping={mapping}>
              <SafeAreaProvider>{children}</SafeAreaProvider>
            </ApplicationProvider>
          </ThemeContext.Provider>
        </AppearanceProvider>
      </QueryClientProvider>
    </>
  );
};
//? Theme Context ex:Dark,Light
