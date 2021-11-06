import React from 'react';
import {TextInput, Text, StyleSheet} from 'react-native';
import Colors from '../Utils/Colors';
import TextStyles from '../Assets/Styles/TextStyles';

const Profile_TextinputCard = ({placeholder}) => {
  return (
    <TextInput
      placeholder={placeholder}
      placeholderTextColor={Colors.white}
      style={styles.Box}></TextInput>
  );
};

export default Profile_TextinputCard;

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
    color: 'grey',
    elevation: 5,
    fontFamily: 'Open Sans',
    marginVertical: 10,
  },
});
