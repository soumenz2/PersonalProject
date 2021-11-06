import React, {Component} from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class LeadHistoryScreen extends Component{
    render(){
        return (
            <View style={styles.container}>
                <Text>LeadHistoryScreen</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})