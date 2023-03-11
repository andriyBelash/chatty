import React, {useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import useUserStore from '../store/user';
import { View, Text } from "react-native";
import {useSafeAreaInsets} from 'react-native-safe-area-context';
//screen
import Home from '../screen/app/Home';
import Me from '../screen/app/Me';
import Edit from '../screen/app/Edit';
import Messages from '../screen/app/Messages';
import User from '../screen/app/User';


const CustomHeader = ({route}: any) => {
  return (
    <View>
      <Text>akjdhasjd</Text>
    </View>
  )
}

const AppStack = () => {
  const insets = useSafeAreaInsets();
  const me = useUserStore(state => state.me);
  const getMe = useUserStore(state => state.getMe);
  useEffect(() => {
    getMe();
  }, []);
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          header: props => <CustomHeader {...props} />
        }}
      />
      <Stack.Screen
        name="Me"
        component={Me}

      />
      <Stack.Screen
        name="Edit"
        component={Edit}
      />
      <Stack.Screen
        name="Messages"
        component={Messages}
      />
      <Stack.Screen
        name="User"
        component={User}
      />
    </Stack.Navigator>
  );
};

export default AppStack;
