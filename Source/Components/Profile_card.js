import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Colors from '../Utils/Colors';
import TextStyles from '../Assets/Styles/TextStyles';
import Arrow_button from './Arrow_button';

const Profile_card = ({title}) => {
  return (
    <View style={styles.Box}>
      <Text style={TextStyles.White_text}>{title}</Text>
      <Arrow_button />
    </View>
  );
};

export default Profile_card;

const styles = StyleSheet.create({
  Box: {
    width: 370,
    height: 43,
    backgroundColor: Colors.blackBlue,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    shadowColor: Colors.grey,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    marginBottom:10
  },
});
