import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const LandingButtons = ({style = {}, UserIcon,colorr,Textt}) => {
  return (
    <View style={[styles.Button, style]}>
      <Image source={UserIcon} style={styles.Icon} />
      <Text style={colorr}>{Textt}</Text>
    </View>
  );
};

export default LandingButtons;

const styles = StyleSheet.create({
  Button: {
    marginBottom:18,
    width: 319,
    height: 68,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  Icon: {
    height: 50,
    width: 38,
    margin: 20,
  },
  Icon_text: {
    fontFamily: 'Open Sans',
    fontSize: 28,
    fontWeight: 'bold',
    
    marginLeft: 30,
  },
});
