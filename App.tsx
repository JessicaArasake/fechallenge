import React from 'react';

import {NativeBaseProvider} from 'native-base';
import {CreditProvider} from './src/context/CreditContext';
import {NavigationContainer} from '@react-navigation/native';
import Routes from './src/routes';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import theme from './src/theme';

export const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <CreditProvider>
        <NavigationContainer theme={theme}>
          <NativeBaseProvider>
            <Routes />
          </NativeBaseProvider>
        </NavigationContainer>
      </CreditProvider>
    </GestureHandlerRootView>
  );
};

export default App;
