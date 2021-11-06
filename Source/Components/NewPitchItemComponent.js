import React, {Component} from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Colors from '../Utils/Colors';
import Arrow_button from './Arrow_button';

export default class NewPitchItemComponent extends Component{
    render(){
        let {item} = this.props;
        return (
            <View style={styles.container}>
                <View style={styles.column}>
                    <Text style={styles.name}>{item.name}</Text>
                    <View style={styles.timeContainer}>
                        <Text style={styles.time}>{item.timestamp}</Text>
                    </View>
                </View>
                <View style={styles.column}>
                    <View style={styles.row}>
                        <Text style={styles.label}>Quantity: </Text>
                        <Text style={styles.value}>{item.quantity}</Text>
                    </View>
                    <View style={item.isUrgent ? styles.urgent : styles.inDays}>
                        <Text style={styles.urgencyStatus}>{item.time}</Text>
                    </View>
                </View>
                <View style={styles.arrowButtonContainer}>
                    <Arrow_button />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderWidth: .5,
        borderColor: 'grey',
        borderRadius: 10,
        height: 90,
        flexDirection: 'row',
        paddingVertical: 15,
        paddingHorizontal: 10
    },
    column: {
        flex: 1
    },
    name: {
        color: Colors.white,
    },
    time: {
        fontWeight: 'bold',
        color: Colors.white,
        fontSize: 13
    },
    label: {
        color: Colors.white,
        fontWeight: 'bold',
    },
    value: {
        fontWeight: 'bold',
        color: Colors.white,
        fontSize: 14
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    urgent: {
        height: 26,
        backgroundColor: Colors.lightred,
        width: 90,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginTop: 'auto'
    },
    arrowButtonContainer: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'center'
    },
    inDays: {
        height: 26,
        backgroundColor: Colors.lightgreen,
        width: 90,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginTop: 'auto'
    },
    timeContainer: {
        marginTop: 'auto',
        justifyContent: 'center',
        height: 26
    }
})