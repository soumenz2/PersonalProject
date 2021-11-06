import React, {Component} from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class LeadComponent extends Component{
    render(){
        return (
            <View style={styles.container} 
                pointerEvents="none">
                <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
                    <Text style={styles.count}>12</Text>
                    <Text style={styles.status}>Completed</Text>
                    <Text style={styles.label}>Leads</Text>
                </View>
                <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
                    <Text style={styles.count}>12</Text>
                    <Text style={styles.status}>Completed</Text>
                    <Text style={styles.label}>Leads</Text>
                </View>
                <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
                    <Text style={styles.count}>12</Text>
                    <Text style={styles.status}>Completed</Text>
                    <Text style={styles.label}>Leads</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#2D2D2D',
        height: 100,
        borderRadius: 5,
        marginVertical: 30,
        justifyContent: 'center',
        flexDirection: 'row',
    },
    count: {
        color: 'white',
        fontSize: 14,
        fontWeight: 'bold',
    },
    status: {
        color: 'white',
        fontSize: 14,
        fontWeight: 'bold',
        lineHeight: 25
    },
    label: {
        color: 'white',
        fontSize: 14,
        fontWeight: 'bold'
    }
})