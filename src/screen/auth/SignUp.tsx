import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import auth from '@react-native-firebase/auth';
// @ts-ignore
import Chatty from '../../../assets/svg/chatty.svg';
// @ts-ignore
import Open from '../../../assets/svg/open.svg';
// @ts-ignore
import Close from '../../../assets/svg/close.svg';

const SignUp = () => {
  const [security, setSecurity] = useState<boolean>(true);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const input = useRef<any>();

  const createUser = () => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {})
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          Alert.alert('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          Alert.alert('That email address is invalid!');
        }
        if (error.code === 'auth/weak-password') {
          Alert.alert('The given password is invalid');
        }
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Chatty height={55} width={120} />
      </View>
      <View style={styles.main}>
        <View style={styles.mainContent}>
          <Text style={styles.title}>РЕЄСТРАЦІЯ</Text>
          <View style={styles.inputs}>
            <TextInput
              style={styles.input}
              placeholder="Електронна пошта"
              placeholderTextColor="#2A2F33"
              selectionColor="#2A2F33"
              value={email.toLowerCase()}
              onChangeText={email => setEmail(email)}
              onSubmitEditing={() => {
                input.current.focus();
              }}
            />
            <View style={{position: 'relative'}}>
              <TextInput
                ref={input}
                style={styles.input}
                secureTextEntry={security}
                value={password}
                onChangeText={password => setPassword(password)}
                placeholder="Пароль"
                placeholderTextColor="#2A2F33"
                selectionColor="#2A2F33"
                onSubmitEditing={createUser}
              />
              {security ? (
                <Open
                  onPress={() => setSecurity(!security)}
                  style={styles.btnSvg}
                  width={30}
                  height={30}
                />
              ) : (
                <Close
                  onPress={() => setSecurity(!security)}
                  style={styles.btnSvg}
                  width={30}
                  height={30}
                />
              )}
            </View>
          </View>
          <TouchableOpacity
            onPress={createUser}
            style={styles.btn}
            activeOpacity={0.8}>
            <Text style={styles.btnText}>РЕЄСТРАЦІЯ</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2A2F33',
  },
  header: {
    height: 179,
    alignItems: 'center',
    justifyContent: 'center',
  },
  main: {
    flex: 1,
    height: 100 + '%',
    backgroundColor: '#E6E1DE',
    borderTopLeftRadius: 67,
    alignItems: 'center',
  },
  mainContent: {
    marginTop: 45,
    width: 330,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    color: '#2A2F33',
    fontSize: 35,
    fontFamily: 'Raleway-SemiBold',
  },
  inputs: {
    flexDirection: 'column',
    gap: 30,
    marginTop: 60,
  },
  input: {
    height: 50,
    width: 330,
    borderBottomWidth: 1,
    borderBottomColor: '#2A2F33',
    fontFamily: 'Raleway-Regular',
    fontSize: 18,
    paddingLeft: 10,
  },
  btnSvg: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  btn: {
    width: 330,
    backgroundColor: '#2A2F33',
    height: 50,
    marginTop: 55,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  btnText: {
    color: '#E6E1DE',
    fontSize: 18,
    fontFamily: 'Raleway-Regular',
  },
});

export default SignUp;
