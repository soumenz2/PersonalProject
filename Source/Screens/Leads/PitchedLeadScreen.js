import React, {Component} from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class PitchedLeadScreen extends Component{
    render(){
        return (
            <View style={styles.container}>
                <Text>PitchedLeadScreen</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})