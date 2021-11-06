import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import TextStyles from '../Assets/Styles/TextStyles';
import Colors from '../Utils/Colors';

const Service_card = ({Icon, Name}) => {
  return (
    <View style={styles.Box}>
      <Image source={Icon} style={styles.Icon} />
      <Text style={[TextStyles.White_text, {textAlign: 'center'}]}>{Name}</Text>
    </View>
  );
};

export default Service_card;

const styles = StyleSheet.create({
  Box: {
    height: 142,
    width: 142,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.blackBlue,
    borderRadius: 10,
    margin: 20,
    shadowColor: '#E8EDF3',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  Icon: {
    height: 55,
    width: 61,
  },
});
