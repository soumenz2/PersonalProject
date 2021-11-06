import React from 'react';
import {View, StyleSheet} from 'react-native';
import Styles from '../Assets/Styles/Styles';
import Colors from '../Utils/Colors';

const Ad_card = () => {
  return <View style={styles.Box}></View>;
};

export default Ad_card;

const styles = StyleSheet.create({
  Box: {
    width: '100%',
    height: 229,
    backgroundColor: Colors.grey,
    marginTop: 20,
  },
});
