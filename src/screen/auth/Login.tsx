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
// @ts-ignore
import Email from '../../../assets/svg/mail.svg';
// @ts-ignore
import Lock from '../../../assets/svg/lock.svg';
// @ts-ignore
import Logo from '../../../assets/svg/logo.svg';
// @ts-ignore
import Google from '../../../assets/svg/g.svg';
// @ts-ignore
import Open from '../../../assets/svg/open.svg';
// @ts-ignore
import Close from '../../../assets/svg/close.svg';

const Login = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [secure, setSecure] = useState<boolean>(true);

  const pass = useRef<any>();

  const authEmail = (): void => {};

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
              value={email}
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
          <Text style={styles.text}>Авторизуватись</Text>
        </TouchableOpacity>
        <View style={styles.orBlock}>
          <View style={styles.line} />
          <Text style={styles.orText}>або</Text>
          <View style={styles.line} />
        </View>
        <TouchableOpacity activeOpacity={0.8} style={styles.googleBtn}>
          <Google width={60} height={60} />
        </TouchableOpacity>
      </SafeAreaView>
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
});

export default Login;
