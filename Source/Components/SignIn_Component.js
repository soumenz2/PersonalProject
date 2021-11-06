import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet, Dimensions} from 'react-native';
import Styles from '../Assets/Styles/Styles';
import {CommonActions, useNavigation} from '@react-navigation/native';
import TextStyles from '../Assets/Styles/TextStyles';
import { TextInput } from 'react-native-paper';

const screenHeight = Dimensions.get('window').height;

const SignInComponent = () => {
  const navigation = useNavigation();
  const [check, setCheck] = useState(false)
  const [passwordVisible, setPasswordVisible] = useState(false);
  return (
    <View style={Object.assign({...Styles.Signin_container}, {minHeight: screenHeight})}>
      <View style={[Styles.SignIn_title]}>
        <Text style={[TextStyles.SignIn_titleText]}>Sign In</Text>
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
          label="Password"
          style={[Styles.SignIn_Input]}
          theme={{colors: {placeholder: 'lightgrey', text: 'white'}}}
          mode="outlined"
          outlineColor="#2D2D2D"
          secureTextEntry={!passwordVisible}
          right={
            <TextInput.Icon 
              name={passwordVisible ? "eye" : 'eye-off'}
              color="lightgrey" 
              size={14} 
              onPress={() => setPasswordVisible(!passwordVisible)}
            />}
          />
        <TouchableOpacity 
          style={{paddingHorizontal: 20, marginTop: 10}}
          onPress={() => navigation.navigate('ForgetPassword')}>
          <Text style={[TextStyles.Yellow_Text]}>
              Forget Password?
          </Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.signInButton}
          onPress={() => {
            navigation.dispatch(CommonActions.reset({
              index: 0,
              routes: [
                {name: 'Home'}
              ]
            }))
          }}>
          <Text style={styles.signInLabel}>Sign In</Text>
        </TouchableOpacity>
        <View style={styles.row}>
          <Text style={styles.label}>New User?</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('SignUp')}>
            <Text style={styles.signUpLink}>Sign Up</Text>
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

export default SignInComponent;


const styles = StyleSheet.create({
  signInButton: {
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
  signInLabel: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20
  },
  label: {
    color: 'white',
    fontSize: 14,
  },
  signUpLink: {
    color: '#ffb600',
    marginLeft: 10,
    fontSize: 14
  }
})