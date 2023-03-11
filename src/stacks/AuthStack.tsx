import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

//screen
// @ts-ignore
import SignUp from '../screen/auth/SignUp';
import SignIn from '../screen/auth/SignIn';

const AuthStack = () => {
  const Tab = createMaterialTopTabNavigator();
  const insets = useSafeAreaInsets();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          marginTop: insets.top,
          backgroundColor: '#2A2F33',
        },
        tabBarIndicatorStyle: {
          backgroundColor: '#E6E1DE',
        },
        tabBarActiveTintColor: '#E6E1DE',
      }}>
      <Tab.Screen name="Реєстрація" component={SignUp} />
      <Tab.Screen name="Вхід" component={SignIn} />
    </Tab.Navigator>
  );
};

export default AuthStack;
