import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import auth from '@react-native-firebase/auth';

const Home = () => {
  React.useEffect(() => {
    auth().onAuthStateChanged(user => {
      if (user) {
        console.log(user)
      } else {
      }
    });
  }, [])
  const logout = (): void => {
    auth()
      .signOut()
      .then(() => console.log('User signed out!'));
  };
  return (
    <View>
      <Text>Hello!</Text>
      <Button onPress={logout} title="Logout" />
    </View>
  );
};

const styles = StyleSheet.create({});

export default Home;
