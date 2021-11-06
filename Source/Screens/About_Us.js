import React from 'react';
import {View, Text, Image} from 'react-native';
import Styles from '../Assets/Styles/Styles';
import TextStyles from '../Assets/Styles/TextStyles';
import Header_Component from '../Components/Header_Component';
import Colors from '../Utils/Colors';
import Email from '../Assets/Icons/Email.png';
import Insta from '../Assets/Icons/Insta.png';
import Twitter from '../Assets/Icons/twitter.png';

const About_Us = () => {
  return (
    <View style={Styles.Profile_container}>
      <Header_Component Heading="About Us" />
      <View style={Styles.Aboutus_container}></View>
      <Text
        style={[
          TextStyles.White_text,
          {fontSize: 24, fontWeight: '700', margin: 15},
        ]}>
        Who are we?
      </Text>
      <Text
        style={[
          TextStyles.White_text,
          {width: 350, textAlign: 'justify', marginLeft: 15},
        ]}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim convallis
        aliquam laoreet senectus donec mauris eget etiam euismod. Metus, ligula
        tortor vel ut at nunc nisl potenti. Sit amet, pulvinar at mi. Consequat
        egestas a.
      </Text>
      <View style={[Styles.Aboutus_view, {marginTop: 40}]}>
        <Text
          style={[TextStyles.White_text, {fontSize: 16, fontWeight: '700'}]}>
          Reach us at :
        </Text>
        <Image source={Email} />
      </View>
      <View style={[Styles.Aboutus_view]}>
        <Text
          style={[TextStyles.White_text, {fontSize: 16, fontWeight: '700'}]}>
          Connect with us on :
        </Text>
        <View style={{flexDirection: 'row'}}>
          <Image source={Insta} />
          <Image source={Twitter} style={{marginLeft: 15}} />
        </View>
      </View>
      <View style={Styles.Aboutus_Footer}>
        <Text style={[TextStyles.White_text, {margin: 10}]}>
          Privacy and terms
        </Text>
        <Text style={[TextStyles.White_text, {margin: 10}]}>Contact Us</Text>
      </View>
    </View>
  );
};

export default About_Us;
