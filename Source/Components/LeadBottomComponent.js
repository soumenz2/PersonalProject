import React, {Component} from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Colors from '../Utils/Colors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default class LeadBottomComponent extends Component{
    render(){
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonLabel}>Sort By</Text>
                    <MaterialIcons 
                        name="sort"
                        size={17}
                        color={Colors.yellow}
                        style={styles.buttonIcon}/>
                </TouchableOpacity>
                <View style={styles.line}/>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonLabel}>Filter</Text>
                    <AntDesign 
                        name="filter" 
                        size={17}
                        color={Colors.yellow}
                        style={styles.buttonIcon}/>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: 60,
        backgroundColor: '#2D2D2D',
        flexDirection: 'row'
    },
    button: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    buttonLabel: {
        color: Colors.yellow,
        fontSize: 18,
        fontWeight: 'bold'
    },
    line: {
        width: 2,
        backgroundColor: Colors.darkgrey
    },
    buttonIcon: {
        marginLeft: 10
    }
})