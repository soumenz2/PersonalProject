import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet, Dimensions} from 'react-native';
import { PRIMARY } from '../Assets/Colors/baseColor';
import Styles from '../Assets/Styles/Styles';
import TextStyles from '../Assets/Styles/TextStyles';
import { TextInput } from 'react-native-paper';

const HEIGHT = Dimensions.get('window').height;

export default class ForgetPasswordScreen extends Component{

    render(){
        let {navigation} = this.props;
        return (
            <View style={styles.container}>
                <View style={[Styles.SignIn_title]}>
                    <Text style={[TextStyles.SignIn_titleText]}>Forgot Password?</Text>
                </View>
                <Text style={styles.topLabel}>We have sent password recovery OPT to your email ab******@gmail.com</Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        label="Enter the OTP"
                        style={styles.input}
                        theme={{colors: {placeholder: 'lightgrey', text: 'white'}}}
                        mode="outlined"
                        outlineColor="#2D2D2D"
                    />
                    <TouchableOpacity>
                        <Text style={styles.otpLabel}>Resend OTP</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={styles.signUpButton}
                        onPress={() => navigation.navigate('ResetPassword')}>
                        <Text style={styles.signUpLabel}>Submit OTP</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.info}>Didn't receive the email? Check your spam filter</Text>
                <View style={[Styles.Footer]}>
                    <Text style={[TextStyles.Footer_text]}>&#169; Copyrights Reserved</Text>
                    <Text style={[TextStyles.Footer_text]}>Construction Flow</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: PRIMARY,
        padding: 10,
        minHeight: HEIGHT
    },
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
        fontSize: 15,
        fontWeight: '700'
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
    },
    input: {
        marginTop: 25,
        fontSize: 13,
        height: 48,
        fontFamily: 'Open Sans',
        backgroundColor: PRIMARY,
    },
    topLabel: {
        color: 'white',
        fontSize: 14,
        marginTop: 50
    },
    inputContainer: {},
    otpLabel: {
        color: '#2D2D2D',
        marginVertical: 15
    },
    info: {
        color: 'white',
        fontSize: 12,
        alignSelf: 'center',
        position: 'absolute',
        bottom: 150
    }
})