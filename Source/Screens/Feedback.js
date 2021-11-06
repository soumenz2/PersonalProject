import React from 'react';
import {View, Text} from 'react-native';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import Styles from '../Assets/Styles/Styles';
import Header_Component from '../Components/Header_Component';
import Colors from '../Utils/Colors';
import Button from '../Components/Button';
import TextStyles from '../Assets/Styles/TextStyles';

const Feedback = () => {
  return (
    <ScrollView>

<View style={{    backgroundColor: Colors.darkgrey,
    marginTop:1,
    height:710}}>
      <Header_Component Heading="Feedback" />
      <View
        style={[Styles.Aboutus_container, {height: 369, alignItems: 'center',marginTop:-2}]}>
        <View style={Styles.Feedback_Input}>
          <TextInput
            multiline={true}
            placeholder="Give your feedback"
            placeholderTextColor={Colors.lightgrey}
            style={{fontFamily: 'Open Sans'}}
          />
        
          <View style={{alignItems: 'center'}}>

        
          </View>
          
        </View>
        <Button title="Submit" style={{alignSelf: 'center', margin: 40}} />
      </View>
     
      <View style={[Styles.Aboutus_Footer, {marginTop: 45}]}>
        <Text style={[TextStyles.White_text, {margin: 10}]}>
          Privacy and terms
        </Text>
        <Text style={[TextStyles.White_text, {margin: 10}]}>Contact Us</Text>
      </View>
    </View>

    </ScrollView>
      );
};

export default Feedback;
