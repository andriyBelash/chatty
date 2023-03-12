import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
// @ts-ignore
import EmptyIcon from '../../../assets/svg/empty.svg';

const Empty = ({message}: {message: string}) => {
  return (
    <View style={styles.empty}>
      <EmptyIcon />
      <Text style={styles.emptyText}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  empty: {
    height: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  emptyText: {
    fontSize: 25,
    color: '#2A2F33',
    fontFamily: 'Raleway-SemiBold',
  },
});

export default Empty;
