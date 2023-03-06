import React, {useEffect, useState} from 'react';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
// stacks
import AuthStack from './stacks/AuthStack';
import AppStack from './stacks/AppStack';

const Container = () => {
  const [authenticated, setAuthenticated] = useState<boolean>(false);
  const [initializing, setInitializing] = useState<boolean>(true);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);
  auth().onAuthStateChanged(user => {
    if (user) {
      setAuthenticated(true);
    } else {
      setAuthenticated(false);
    }
  });
  function onAuthStateChanged(user: any) {
    setUser(user);
    if (initializing) {
      setInitializing(false);
    }
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  return authenticated ? <AppStack /> : <AuthStack />;
};

export default Container;
