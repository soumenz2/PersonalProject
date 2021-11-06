import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet, Dimensions} from 'react-native';
import { PRIMARY } from '../Assets/Colors/baseColor';
import Styles from '../Assets/Styles/Styles';
import TextStyles from '../Assets/Styles/TextStyles';
import { HelperText, TextInput } from 'react-native-paper';
import Colors from '../Utils/Colors';

const HEIGHT = Dimensions.get('window').height;

export default class ResetPasswordScreen extends Component{

    constructor(){
        super();
        this.state = {
            passwordVisible1: false,
            passwordVisible2: false
        }
    }

    render(){
        let {passwordVisible1, passwordVisible2} = this.state;
        let {navigation} = this.props
        return (
            <View style={styles.container}>
                <View style={styles.titleContainer}>
                    <Text style={styles.titleText}>Create New Password</Text>
                </View>
                <Text style={styles.topLabel}>Your new password should be different from the previous used passwords</Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        label="Password"
                        style={styles.input}
                        theme={{colors: {placeholder: 'lightgrey', text: 'white'}}}
                        mode="outlined"
                        outlineColor="#2D2D2D"
                        secureTextEntry={!passwordVisible1}
                        right={
                        <TextInput.Icon 
                            name={passwordVisible1 ? "eye" : 'eye-off'}
                            color="lightgrey" 
                            size={14} 
                            onPress={() => this.setState({passwordVisible1: !passwordVisible1})}
                            />}
                    />
                    <TextInput
                        label="Confirm Password"
                        style={styles.input}
                        theme={{colors: {placeholder: 'lightgrey', text: 'white'}}}
                        mode="outlined"
                        outlineColor="#2D2D2D"
                        secureTextEntry={!passwordVisible2}
                        right={
                        <TextInput.Icon 
                            name={passwordVisible2 ? "eye" : 'eye-off'}
                            color="lightgrey" 
                            size={14} 
                            onPress={() => this.setState({passwordVisible2: !passwordVisible2})}
                            />}
                    />
                    <Text style={styles.helperTextLabel}>
                        Both the password should match
                    </Text>
                    <TouchableOpacity>
                        <Text style={styles.otpLabel}>Resend OTP</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={styles.signUpButton}
                        onPress={() => navigation.navigate('SignInComponent')}>
                        <Text style={styles.signUpLabel}>Reset Password</Text>
                    </TouchableOpacity>
                </View>
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
        minWidth: '33.3%',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
        borderRadius: 5,
        paddingHorizontal: 20
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
        fontSize: 14,
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
    titleContainer: {
        height: 100,
        width: '100%',
        backgroundColor: PRIMARY,
        alignItems: 'center',
        flexDirection: 'column',
    },
    titleText: {
        fontFamily: 'Open Sans',
        fontWeight: '700',
        fontSize: 24,
        color: Colors.white,
        lineHeight: 32.68,
        marginTop: 50,
    },
    helperTextLabel: {
        color: '#F5F5F5',
        fontSize: 11,
        marginVertical: 10
    }
})