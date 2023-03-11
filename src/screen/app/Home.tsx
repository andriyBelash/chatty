import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import auth from '@react-native-firebase/auth';
import useUserStore from '../../store/user';
// import useBearStore from '../../store/user';

const Home = () => {
  const me = useUserStore(state => state.me);
  const getMe = useUserStore(state => state.getMe);
  useEffect(() => {
    getMe()
  }, [])
  return (
    <View>
      <Text>Hello! {me.email}</Text>
      <Button onPress={() => auth().signOut()} title="Logout" />
    </View>
  );
};

const styles = StyleSheet.create({});

export default Home;
