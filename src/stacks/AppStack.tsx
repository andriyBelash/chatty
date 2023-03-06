import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//screen
import Home from '../screen/app/Home';

const AppStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

export default AppStack;
