/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { SafeAreaProvider } from 'react-native-safe-area-context';

import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Container from './src/Container';
import SplashScreen from 'react-native-splash-screen';
import { StatusBar } from "react-native";

function App(): JSX.Element {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <SafeAreaProvider>
      <StatusBar backgroundColor="#2A2F33"/>
      <NavigationContainer>
        <Container />
      </NavigationContainer>
    </SafeAreaProvider>

  );
}

export default App;
