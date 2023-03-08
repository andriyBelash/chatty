import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

interface Props {
  show: boolean;
  message: string;
}

const Notify = ({show, message}: Props): JSX.Element => {
  return (
    <>
      {show ? (
        <View style={styles.notify}>
          <View style={styles.container}>
            <Text style={styles.text}>{message}</Text>
          </View>
        </View>
      ) : undefined}
    </>
  );
};

const styles = StyleSheet.create({
  notify: {
    width: 320,
    height: 40,
    backgroundColor: '#C2956E',
    borderRadius: 4,
    position: 'absolute',
    left: '10%',
    bottom: 50,
  },
  container: {
    width: 100 + '%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#3A5154',
  },
});

export default Notify;
