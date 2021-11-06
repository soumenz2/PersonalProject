import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import TextStyles from '../Assets/Styles/TextStyles';
import Colors from '../Utils/Colors';
import Button from './Button';
import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const NotificationCard = ({Title, Pin, Delete, Description}) => {
  return (
    <View style={styles.Box}>
      <View style={styles.UpperBox}>
        <Text
          style={[
            TextStyles.Yellow_Text,
            {fontWeight: 'bold', fontSize: 16, flex: 1},
          ]}>
          {Title}
        </Text>
        <Image source={Pin} style={styles.icon} />
        <Image source={Delete} />
      </View>
      <View style={styles.LowerBox}>
        <Text style={[TextStyles.White_text, {width: 150, fontSize: 12}]}>
          {Description}
        </Text>
        <Button style={{height: 32, width: 97}} title="Check Now" />
      </View>
    </View>
  );
};

export default NotificationCard;

const styles = StyleSheet.create({
  Box: {
    margin: 10,
    height: 300,
    width: 363,
    backgroundColor: Colors.grey,

    borderRadius: 10,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  UpperBox: {
    flexDirection: 'row',
    padding: 10,
  },
  icon: {marginHorizontal: 10},
  LowerBox: {
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-between',
  },
});
