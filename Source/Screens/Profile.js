import React from 'react';
import {Text, TouchableOpacity,ScrollView,StatusBar, View} from 'react-native';
import Styles from '../Assets/Styles/Styles';
import Main_HeaderComponent from '../Components/Main_HeaderComponent';
import Profile_card from '../Components/Profile_card';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
import Colors from '../Utils/Colors';
import TextStyles from '../Assets/Styles/TextStyles';
import Arrow_button from '../Components/Arrow_button';
import Profile_Details from './Profile_Details';
import Company_Details from './Company_Details';
import Company_Address from './Company_Address';
import Site_AddressBook from './Site_AddressBook';
import Help from './Help';
import About_Us from './About_Us';
import Feedback from './Feedback';
import { CommonActions } from '@react-navigation/native';

const Profile = ({navigation}) => {
  return (
    <ScrollView style={Styles.Profile_container}>
      <View style={Styles.Profile_Head}>
        <View style={{flexDirection: 'row', 
          alignItems: 'center'}}>
          <Text style={[TextStyles.White_text, {width: 230}]}>
            Please complete your Profile by adding remaining information.
          </Text>
          <Arrow_button />
        </View>
        <AnimatedCircularProgress
          style={Styles.CircularProgressBar}
          size={70}
          width={6}
          fill={40}
          tintColor={Colors.yellow}
          lineCap="round"
          onAnimationComplete={() => console.log('onAnimationComplete')}
          backgroundColor={Colors.grey}
          children={fill => (
            <Text style={[TextStyles.Yellow_Text, {fontWeight: 'bold'}]}>
              {'40%'}
            </Text>
          )}
        />
      </View>
      <View
        style={{alignItems: 'center', flex: 1, justifyContent: 'space-evenly',paddingBottom:30,marginBottom:20}}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate(Profile_Details);
          }}>
          <Profile_card title="Profile Details" />
        </TouchableOpacity>
        <TouchableOpacity
       onPress={() => navigation.navigate('Company_Details', {percentage: 33})}>
          <Profile_card title="Company Details" />
        </TouchableOpacity>
        <TouchableOpacity
         onPress={() => navigation.navigate('Company_Address', {percentage: 66})}>
          <Profile_card title="Company Address" />
        </TouchableOpacity>
      
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Help');
          }}>
          <Profile_card title="Help" />
        </TouchableOpacity>
       
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('About_Us');
          }}>
          <Profile_card title="About Us" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Feedback');
          }}>
          <Profile_card title="Feedback" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.dispatch(CommonActions.reset({
              index: 0,
              routes: [
                {name: 'LandingScreen'}
              ]
            }))
          }}>
          <Profile_card title="Logout" />
        </TouchableOpacity>
      </View>
    </ScrollView>   
  );
};

export default Profile;
