import React from 'react';
import {View, StyleSheet, Text, TouchableHighlight, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Notifications from '../Screens/Notifications';
import {useNavigation} from '@react-navigation/native';

import Colors from '../Utils/Colors';

const Notification_header = ({Heading}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.Container}>
      <TouchableOpacity
       onPress={() => navigation.goBack()}
      >
      <Ionicons
        name="arrow-back-outline"
        color={Colors.yellow}
        size={20}
        style={{padding: 10}}
      />

      </TouchableOpacity>
    
      <Text style={styles.Header}>{Heading}</Text>
    </View>
  );
};

export default Notification_header;

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

    flex: 1,
  },
});
