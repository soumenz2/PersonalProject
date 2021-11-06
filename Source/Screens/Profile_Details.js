import React from 'react';
import {View, Text } from 'react-native';
import Styles from '../Assets/Styles/Styles';
import Header_Component from '../Components/Header_Component';
import ProgressBar from 'react-native-progress/Bar';
import Colors from '../Utils/Colors';
import Profile_TextinputCard from '../Components/Profile_TextinputCard';
import Button from '../Components/Button';

const Profile_Details = ({navigation, percentage = 0}) => {
  return (
    <View style={Styles.ProfileDetails_container}>
      <Text style={{color: 'white', alignSelf: 'flex-start', paddingLeft: 15}}>{`${percentage}% completed`}</Text>
      <ProgressBar
        unfilledColor="#6d6e70"
        color={Colors.yellow}
        progress={0}
        width={369}
        height={8}
        borderWidth={0}
        style={{margin: 20}}
      />
      <Profile_TextinputCard placeholder="Name"/>
      <Profile_TextinputCard placeholder="Email ID" />
      <Profile_TextinputCard placeholder="Phone No." />
      <Profile_TextinputCard placeholder="Whatsapp No." />
      <Profile_TextinputCard placeholder="Password" />
      <View
        style={{
          flexDirection: 'row',
          marginTop: 50,
          justifyContent: 'space-between',
          width: 152,
          position: 'absolute',
          bottom: 70,
        }}>
        <Button title="Save" 
          style={{height: 40, width: 70}} 
          textStyle={{color: Colors.blackBlue}}
        />
        <Button 
          title="Next" 
          style={Styles.Next} textStyle={{color: Colors.yellow}}
          onPress={() => navigation.navigate('Company_Details', {percentage: 33})}/>
      </View>
    </View>
  );
};

export default Profile_Details;
