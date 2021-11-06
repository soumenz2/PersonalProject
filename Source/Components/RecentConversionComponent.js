import React, {Component} from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const RecentConversions = [
    {id: 1, from: '500 Centimeters', to: '5 Meters'},
    {id: 2, from: '20 Yards', to: '18.288 Meters'},
]

export default class RecentConversionComponent extends Component{

    constructor(){
        super();
        this.renderRecentConversion = this.renderRecentConversion.bind(this);

    }

    renderRecentConversion({item}){
        return (
            <View style={styles.item}>
                <Text style={styles.fromLabel}>{item.from}</Text>
                <FontAwesome name="exchange" size={14} color='#F5F5F5' style={{marginHorizontal: 15}}/>
                <Text style={styles.toLabel}>{item.to}</Text>
            </View>
        )
    }

    render(){
        return (
            <View style={styles.container} pointerEvents="none">
                <Text style={styles.title}>Recent Conversions</Text>
                <FlatList
                    data={RecentConversions}
                    renderItem={this.renderRecentConversion}
                    keyExtractor={item => item.id.toString()}
                    />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
    },
    title: {
        color: 'grey',
        fontSize: 16,
        lineHeight: 24
    },
    item: {
        flexDirection: 'row',
        height: 40,
        alignItems: 'flex-end',
    },
    fromLabel: {
        color: 'grey',
        fontSize: 16,
        lineHeight: 24,
        flex: 1,
    },
    toLabel: {
        color: 'grey',
        fontSize: 16,
        lineHeight: 24,
        flex: 1,
        textAlign: 'right'
    }
})