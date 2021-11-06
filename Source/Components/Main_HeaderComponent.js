import React from 'react';
import {View, StyleSheet, Text, TouchableHighlight} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Notifications from '../Screens/Notifications';
import {useNavigation} from '@react-navigation/native';

import Colors from '../Utils/Colors';

const Main_HeaderComponent = ({Heading}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.Container}>
      {Heading === 'Profile' && (
        <>
          <View style={styles.StoriesContainer}></View>
          <Text style={styles.Header}>{Heading}</Text>
        </>
      )}
      {Heading !== 'Profile' && (
        <>
          <Text style={styles.Header}>{Heading}</Text>
          <View style={styles.StoriesContainer}></View>
        </>
      )}
      <View style={styles.NotificationContainer}>
        <TouchableHighlight
          onPress={() => {
            navigation.navigate(Notifications);
          }}>
          <Ionicons
            name="notifications-outline"
            color={Colors.yellow}
            size={18}
          />
        </TouchableHighlight>
      </View>
    </View>
  );
};

export default Main_HeaderComponent;

const styles = StyleSheet.create({
  Container: {
    height: 56,
    width: '100%',
    backgroundColor: Colors.blackBlue,
    flexDirection: 'row',

    alignItems: 'center',
  },
  Header: {
    color: '#ffb600',
    fontSize: 24,
    fontFamily: 'Open Sans',
    fontWeight: '700',
    marginLeft: 20,
    flex: 1,
  },
  StoriesContainer: {
    height: 37,
    width: 37,
    borderRadius: 18.5,
    backgroundColor: Colors.blackBlue,
    margin: 10,
    shadowColor: Colors.lightgrey,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    borderWidth: 1,
    borderColor: Colors.yellow,
    borderStyle: 'dashed',
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  NotificationContainer: {
    height: 33,
    width: 33,
    borderRadius: 16.5,
    backgroundColor: Colors.blackBlue,
    margin: 10,
    shadowColor: Colors.lightgrey,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
