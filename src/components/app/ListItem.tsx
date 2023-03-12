import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface IProps {
  message: string;
}

const ListItem = ({message}: IProps) => {
  let maxlimit = 35;
  return (
    <View style={styles.item}>
      <View style={styles.itemMain}>
        <View style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.textTitle}>Martin Scorseze</Text>
          <Text numberOfLines={1} style={[styles.itemTimeText]}>
            {message.length > maxlimit
              ? message.substring(0, maxlimit - 3) + '...'
              : message}
          </Text>
        </View>
      </View>
      <View style={styles.itemTime}>
        <Text style={styles.itemTimeText}>12:25</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    width: '100%',
    height: 70,
    borderBottomWidth: 1,
    borderBottomColor: '#2A2F33',
    flexDirection: 'row',
  },
  itemMain: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    flex: 9,
    paddingTop: 10,
    gap: 10,
    overflow: 'hidden',
  },
  image: {
    width: 45,
    height: 45,
    backgroundColor: '#2A2F33',
    borderRadius: 4,
  },
  itemTime: {
    flex: 2,
    alignItems: 'center',
    paddingTop: 10,
  },
  itemTimeText: {
    color: '#2A2F33',
    fontSize: 12,
    fontFamily: 'Raleway-Regular',
  },
  textContainer: {
    flexDirection: 'column',
    gap: 5,
  },
  textTitle: {
    fontSize: 16,
    fontFamily: 'Raleway-SemiBold',
    color: '#2A2F33',
  },
});

export default ListItem;
