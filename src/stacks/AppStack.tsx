import React, {useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import useUserStore from '../store/user';
import {
  Text,
  StyleSheet,
  Pressable,
  Image,
  Platform,
} from 'react-native';
//screen
import Home from '../screen/app/Home';
import Me from '../screen/app/Me';
import Edit from '../screen/app/Edit';
import Messages from '../screen/app/Messages';
import User from '../screen/app/User';
import Search from '../screen/app/Search';
// @ts-ignore
import Back from '../../assets/svg/back.svg';
// @ts-ignore
import EditIcon from '../../assets/svg/edit.svg';

const AppStack = () => {
  const Stack = createNativeStackNavigator();
  const me = useUserStore(state => state.me);
  const getMe = useUserStore(state => state.getMe);
  useEffect(() => {
    getMe();
  }, []);
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        animation: 'none',
        headerTintColor: '#E6E1DE',
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#2A2F33',
        },
      }}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={({navigation}) => ({
          headerRight: () => (
            <Pressable
              style={styles.avatar}
              onPress={() => navigation.navigate('Me')}>
              {me.photoURL ? (
                <Image source={me.photoURL} />
              ) : (
                <Text
                  style={{
                    textTransform: 'uppercase',
                    fontSize: 20,
                    color: '#2A2F33',
                  }}>
                  {me.email ? me?.email[0] : 'A'}
                </Text>
              )}
            </Pressable>
          ),
        })}
      />
      <Stack.Screen
        name="Me"
        component={Me}
        options={({navigation}) => ({
          headerRight: () => (
            <EditIcon
              onPress={() => navigation.navigate('Edit')}
              width={30}
              height={30}
            />
          ),
          headerLeft: () => (
            <Back onPress={() => navigation.goBack()} width={30} height={30} />
          ),
        })}
      />
      <Stack.Screen
        name="Edit"
        component={Edit}
        options={({navigation}) => ({
          headerLeft: () => (
            <Back onPress={() => navigation.goBack()} width={30} height={30} />
          ),
        })}
      />
      <Stack.Screen
        name="Messages"
        component={Messages}
        options={({navigation}) => ({
          headerRight: () => (
            <Pressable
              style={styles.avatar}
              onPress={() => navigation.navigate('Me')}>
              {me.photoURL ? (
                <Image source={me.photoURL} />
              ) : (
                <Text
                  style={{
                    textTransform: 'uppercase',
                    fontSize: 20,
                    color: '#2A2F33',
                  }}>
                  {me.email ? me?.email[0] : 'A'}
                </Text>
              )}
            </Pressable>
          ),
          headerLeft: () => (
            <Back onPress={() => navigation.goBack()} width={30} height={30} />
          ),
        })}
      />
      <Stack.Screen
        name="User"
        component={User}
        options={({navigation}) => ({
          headerRight: () => (
            <Pressable
              style={styles.avatar}
              onPress={() => navigation.navigate('Me')}>
              {me.photoURL ? (
                <Image source={me.photoURL} />
              ) : (
                <Text
                  style={{
                    textTransform: 'uppercase',
                    fontSize: 20,
                    color: '#2A2F33',
                  }}>
                  {me.email ? me?.email[0] : 'A'}
                </Text>
              )}
            </Pressable>
          ),
          headerLeft: () => (
            <Back onPress={() => navigation.goBack()} width={30} height={30} />
          ),
        })}
      />
      <Stack.Screen
        name="Search"
        component={Search}
        options={({navigation}) => ({
          headerRight: () => (
            <Pressable
              style={styles.avatar}
              onPress={() => navigation.navigate('Me')}>
              {me.photoURL ? (
                <Image source={me.photoURL} />
              ) : (
                <Text
                  style={{
                    textTransform: 'uppercase',
                    fontSize: 20,
                    color: '#2A2F33',
                  }}>
                  {me.email ? me?.email[0] : 'A'}
                </Text>
              )}
            </Pressable>
          ),
          headerLeft: () => (
            <Back onPress={() => navigation.goBack()} width={30} height={30} />
          ),
        })}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  header: {
    height: Platform.OS === 'ios' ? 100 : 50,
    backgroundColor: '#2A2F33',
    paddingBottom: Platform.OS === 'ios' ? 10 : 0,
  },
  headerContainer: {
    paddingHorizontal: 20,
    alignItems: Platform.OS === 'ios' ? 'flex-end' : 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
  },
  avatar: {
    width: 35,
    height: 35,
    backgroundColor: '#E6E1DE',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default AppStack;
