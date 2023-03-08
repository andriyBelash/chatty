import React, {useRef, useState} from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Text,
  Platform,
} from 'react-native';
import Notify from '../../components/app/Notify';
import auth from '@react-native-firebase/auth';
// @ts-ignore
import Email from '../../../assets/svg/mail.svg';
// @ts-ignore
import Lock from '../../../assets/svg/lock.svg';
// @ts-ignore
import Logo from '../../../assets/svg/logo.svg';
// // @ts-ignore
// import Google from '../../../assets/svg/g.svg';
// @ts-ignore
import Open from '../../../assets/svg/open.svg';
// @ts-ignore
import Close from '../../../assets/svg/close.svg';

const Login = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [secure, setSecure] = useState<boolean>(true);
  const [show, setShowing] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');
  const [signIn, setSignIn] = useState<boolean>(false);

  const pass = useRef<any>();

  const signUp = (): void => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log('User account created & signed in!');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          setMessage('That email address is already in use');
          console.log('That email address is already in use!');
          setShowing(true);
        }

        if (error.code === 'auth/invalid-email') {
          setMessage('That email address is invalid!');
          setShowing(true);
          console.log('That email address is invalid!');
        }
        if (error.code === 'auth/weak-password') {
          setMessage('The given password is invalid');
          setShowing(true);
          console.log('The given password is invalid');
        }

        console.error(error.code);
      })
      .finally(() => {
        setTimeout(() => {
          setShowing(false);
        }, 3000);
      });
  };

  const signInEmail = (): void => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log('User account created & signed in!');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          setMessage('That email address is already in use');
          console.log('That email address is already in use!');
          setShowing(true);
        }

        if (error.code === 'auth/invalid-email') {
          setMessage('That email address is invalid!');
          setShowing(true);
          console.log('That email address is invalid!');
        }
        if (error.code === 'auth/weak-password') {
          setMessage('The given password is invalid');
          setShowing(true);
          console.log('The given password is invalid');
        }

        console.error(error.code);
      })
      .finally(() => {
        setTimeout(() => {
          setShowing(false);
        }, 3000);
      });
  };

  const authEmail = (): void => {
    if (signIn) {
      signInEmail();
    } else {
      signUp();
    }
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.content}>
        <Logo width={128} height={128} />
        <View style={styles.inputs}>
          <View style={styles.inputBlock}>
            <View style={styles.iconContainer}>
              <Email width={30} height={30} />
            </View>
            <TextInput
              style={styles.input}
              placeholder="Електронна пошта"
              placeholderTextColor="#C2956E"
              selectionColor={'#C2956E'}
              value={email.toLowerCase()}
              onChangeText={email => setEmail(email)}
              onEndEditing={() => {
                pass.current.focus();
              }}
            />
          </View>
          <View style={styles.inputBlock}>
            <View style={styles.iconContainer}>
              <Lock width={30} height={30} />
            </View>
            <TextInput
              ref={pass}
              style={styles.input}
              placeholder="Пароль"
              placeholderTextColor="#C2956E"
              selectionColor={'#C2956E'}
              value={password}
              onChangeText={password => setPassword(password)}
              onEndEditing={authEmail}
              secureTextEntry={secure}
            />
            <TouchableOpacity
              onPress={() => setSecure(!secure)}
              style={styles.secureBtn}
              activeOpacity={1}>
              {secure ? (
                <Open width={30} height={30} />
              ) : (
                <Close width={30} height={30} />
              )}
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity
          style={styles.btn}
          onPress={authEmail}
          activeOpacity={0.8}>
          <Text style={styles.text}>{signIn ? 'Вхід' : 'Реєстрація'}</Text>
        </TouchableOpacity>
        <View style={styles.cheepsContainer}>
          <TouchableOpacity
            style={{opacity: signIn ? 0.5 : 1}}
            onPress={() => setSignIn(false)}
            activeOpacity={0.8}>
            <Text style={styles.orText}>Реєстрація</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{opacity: !signIn ? 0.5 : 1}}
            onPress={() => setSignIn(true)}
            activeOpacity={0.8}>
            <Text style={styles.orText}>Вхід</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      <Notify show={show} message={message} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3A5154',
  },
  content: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputs: {
    flexDirection: 'column',
    gap: 50,
    marginTop: 100,
  },
  inputBlock: {
    width: 320,
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: '#C2956E',
    flexDirection: 'row',
  },
  iconContainer: {
    width: 56,
    borderRightWidth: 1,
    borderRightColor: '#C2956E',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 8,
    position: 'relative',
  },
  input: {
    width: 264,
    paddingLeft: 15,
    fontSize: 20,
    color: '#C2956E',
    paddingTop: 5,
    paddingBottom: Platform.OS === 'ios' ? 10 : 0,
  },
  btn: {
    width: 320,
    height: 58,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    backgroundColor: '#C2956E',
    marginTop: 60,
  },
  text: {
    color: '#3A5154',
    fontSize: 20,
  },
  orBlock: {
    marginTop: 40,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 320,
  },
  line: {
    width: 120,
    height: 1,
    backgroundColor: '#C2956E',
  },
  orText: {
    color: '#C2956E',
    fontSize: 20,
  },
  googleBtn: {
    marginTop: 50,
  },
  secureBtn: {
    position: 'absolute',
    right: 10,
  },
  cheepsContainer: {
    width: 320,
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 50,
  },
});

export default Login;
