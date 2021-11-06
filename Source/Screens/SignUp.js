import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet, Dimensions} from 'react-native';
import Styles from '../Assets/Styles/Styles';
import CheckBox from '@react-native-community/checkbox';
import {useNavigation, CommonActions} from '@react-navigation/native';
import TextStyles from '../Assets/Styles/TextStyles';
import { TextInput } from 'react-native-paper';
import Home from './Home';

const screenHeight = Dimensions.get('window').height;

const SignUp = () => {
  const navigation = useNavigation();
  const [check, setCheck] = useState(false)
  const [passwordVisible1, setPasswordVisible1] = useState(false);
  const [passwordVisible2, setPasswordVisible2] = useState(false);
  return (
    <View style={Object.assign({...Styles.Signup_container}, {minHeight: screenHeight})}>
      <View style={[Styles.SignIn_title]}>
        <Text style={[TextStyles.SignIn_titleText]}>Sign Up</Text>
      </View>
      <View style={[Styles.SignIn_body]}>
        <TextInput
          label="Enter Email Address*"
          style={[Styles.SignIn_Input]}
          theme={{colors: {placeholder: 'lightgrey', text: 'white'}}}
          mode="outlined"
          outlineColor="#2D2D2D"
          
        />
        <TextInput
          label="Enter Mobile Number*"
          style={[Styles.SignIn_Input]}
          theme={{colors: {placeholder: 'lightgrey', text: 'white'}}}
          mode="outlined"
          outlineColor="#2D2D2D"
        />
        <TextInput
          label="Password"
          style={[Styles.SignIn_Input]}
          theme={{colors: {placeholder: 'lightgrey', text: 'white'}}}
          mode="outlined"
          outlineColor="#2D2D2D"
          secureTextEntry={!passwordVisible1}
          right={
            <TextInput.Icon 
              name={passwordVisible1 ? "eye" : 'eye-off'}
              color="lightgrey" 
              size={14} 
              onPress={() => setPasswordVisible1(!passwordVisible1)}
            />}
          />
        <TextInput
          label="Confirm Password"
          style={[Styles.SignIn_Input]}
          theme={{colors: {placeholder: 'lightgrey', text: 'white'}}}
          mode="outlined"
          outlineColor="#2D2D2D"
          secureTextEntry={!passwordVisible2}
          right={
            <TextInput.Icon 
              name={passwordVisible2 ? "eye" : 'eye-off'}
              color="lightgrey" 
              size={14} 
              onPress={() => setPasswordVisible2(!passwordVisible2)}
            />}
        />
        <View style={[Styles.Checkbox_View]}>
          <CheckBox
            style={[Styles.Checkbox]}
            disabled={false}
            value={check}
            onChange={() => setCheck(!check)}
            tintColors = {{ true: '#ffb600' , false: '#ffb600' }}
          />
          <Text style={[TextStyles.Yellow_Text]}>
            I agree to all terms and conditions
          </Text>
        </View>
        <TouchableOpacity 
          style={styles.signUpButton}
          onPress={() => {
            navigation.navigate('Home')
          }}>
          <Text style={styles.signUpLabel}>SignUp</Text>
        </TouchableOpacity>
        <View style={styles.row}>
          <Text style={styles.label}>Already a User?</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('SignInComponent')}>
            <Text style={styles.signInLink}>Sign In</Text>
          </TouchableOpacity>
        </View>
        <View style={[Styles.Footer]}>
          <Text style={[TextStyles.Footer_text]}>Copyrights Reserved</Text>
          <Text style={[TextStyles.Footer_text]}>Construction Flow</Text>
        </View>
      </View>
    </View>
  );
};

export default SignUp;


const styles = StyleSheet.create({
  signUpButton: {
    backgroundColor: '#ffb600',
    color: 'black',
    height: 50,
    flexShrink: 0,
    width: '33.3%',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
    borderRadius: 5
  },
  signUpLabel: {
    fontSize: 17,
    fontWeight: 'bold'
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20
  },
  label: {
    color: 'white',
    fontSize: 14
  },
  signInLink: {
    color: '#ffb600',
    marginLeft: 10,
    fontSize: 14
  }
})