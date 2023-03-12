import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import useUserStore from '../../store/user';
// @ts-ignore
import Add from '../../../assets/svg/add.svg';
import ListItem from '../../components/app/ListItem';
import Empty from '../../components/app/Empty';

const Home = ({navigation}: any) => {
  const me = useUserStore(state => state.me);
  const getMe = useUserStore(state => state.getMe);
  useEffect(() => {
    getMe();
  }, []);
  let EMPTY_LIST = false
  return (
    <View style={{flex: 1, backgroundColor: '#e6e1de'}}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Чати</Text>
          <Add
            onPress={() => navigation.navigate('Search')}
            width={30}
            height={30}
          />
        </View>
        {EMPTY_LIST ? (
          <ScrollView
            contentContainerStyle={styles.list}
            showsVerticalScrollIndicator={false}>
            <TouchableOpacity activeOpacity={0.7}>
              <ListItem message="asdajsdhk asdasd asdasd asd asdasdjhg jhagsjdas" />
            </TouchableOpacity>
          </ScrollView>
        ) : (
          <Empty message='Повідомлень ще не має'/>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 25,
    paddingVertical: 15,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontFamily: 'Raleway-SemiBold',
    color: '#2A2F33',
  },
  list: {
    paddingBottom: 50,
    paddingTop: 30,
  },
});

export default Home;
