import React from 'react';
import {View, StyleSheet, Text, TouchableHighlight, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Notifications from '../Screens/Notifications';
import {useNavigation} from '@react-navigation/native';

import Colors from '../Utils/Colors';

const Header_Component = ({Heading}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.Container}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}>
        <Ionicons
          name="arrow-back-outline"
          color={Colors.yellow}
          size={20}
          style={{padding: 10}}
        />
      </TouchableOpacity>
      <Text style={styles.Header}>{Heading}</Text>
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

export default Header_Component;

const styles = StyleSheet.create({
  Container: {
    height: 56,
    width: '100%',
    backgroundColor: Colors.blackBlue,
    flexDirection: 'row',
    marginBottom:10,
    alignItems: 'center',
  },
  Header: {
    color: '#ffb600',
    fontSize: 20,
    fontFamily: 'Open Sans',
    fontWeight: '700',
    flex: 1,
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
