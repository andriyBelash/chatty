import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//screen
// @ts-ignore
import Login from '../screen/auth/Login';

const AuthStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
    </Stack.Navigator>
  );
};

export default AuthStack;
