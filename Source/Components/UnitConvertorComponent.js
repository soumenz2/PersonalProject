import React, {Component} from 'react';
import { StyleSheet, View, TouchableOpacity, TextInput, Text, FlatList, Dimensions } from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import CheckBox from 'react-native-check-box';
import Colors from '../Utils/Colors';

const BUTTONLABELS = [
    {id: 1, name: 'Area'},
    {id: 2, name: 'Distance'},
    {id: 3, name: 'Volume'},
    {id: 4, name: 'Weight'},
]
  
const UNITS = [
    {id: 1, name: 'Millimetre'},
    {id: 2, name: 'Centimetre'},
    {id: 3, name: 'Metre'},
    {id: 4, name: 'Kilometre'},
    {id: 5, name: 'Mile'},
    {id: 6, name: 'Yard'},
    {id: 7, name: 'Foot'},
    {id: 8, name: 'Inch'},
]

export default class UnitConvertorComponent extends Component{

    constructor(){
        super();
        this.state = {
          selectedButtonId: 1,
          leftDropDownVisible: false,
          rightDropDownVisible: false,
          currentlyCheckedUnit: 1
        }
        this.hideDropDown = this.hideDropDown.bind(this);
        this.onButtonClick = this.onButtonClick.bind(this);
        this.onDropdownItemClick = this.onDropdownItemClick.bind(this);
        this.toggleRightDropDown = this.toggleRightDropDown.bind(this);
        this.toggleLeftDropDown = this.toggleLeftDropDown.bind(this);
        this.renderDropDownItem = this.renderDropDownItem.bind(this);
    }
    
    onButtonClick(id){
        this.setState({selectedButtonId: id});
    }

    toggleLeftDropDown(){
        let {leftDropDownVisible, rightDropDownVisible} = this.state;
        if(rightDropDownVisible){
            this.setState({leftDropDownVisible: !leftDropDownVisible, rightDropDownVisible: false})
        } 
        else {
            this.setState({leftDropDownVisible: !leftDropDownVisible});
        } 
    }

    toggleRightDropDown(){
        console.log(12)
        let {leftDropDownVisible, rightDropDownVisible} = this.state;
        if(leftDropDownVisible){
            this.setState({rightDropDownVisible: !rightDropDownVisible, leftDropDownVisible: false})
        }
        else{
            this.setState({rightDropDownVisible: !rightDropDownVisible})
        }
    }

    hideDropDown(){
        this.setState({rightDropDownVisible: false, leftDropDownVisible: false})
    }
    
    onDropdownItemClick(){
        // this.setState({currentlyCheckedUnit: id});
        console.log(1234)
        this.setState({dropDownVisible: !this.state.dropDownVisible})
    }

    renderDropDownItem({item}){
        return (
            <TouchableOpacity
                style={styles.dropDownItem}
                    activeOpacity={.7}
                key={item.id}
                onPress={() => {console.log(23)}}>
                <CheckBox
                    checkBoxColor="#2D2D2D"
                    onClick={() => {console.log('Clicked')}}
                    style={{
                        borderColor: 'red', 
                        justifyContent: 'center', 
                        marginHorizontal: 5,
                        height: 50,
                        width: 30
                    }}
                    isChecked={item.id === this.state.currentlyCheckedUnit}
                />
                <Text style={{color: '#F5F5F5', padding: 0, textAlign: 'center'}}>{item.name}</Text>
            </TouchableOpacity>
        )
    }
    
    renderButton({id, name}){
        const {selectedButtonId} = this.state;
        const isSelected = selectedButtonId === id;
        return (
          <TouchableOpacity 
            style={isSelected ? styles.selectedButton : styles.button } 
            onPress={() => this.onButtonClick(id)}
            key={id}>
            <Text style={isSelected ? styles.selectedButtonLabel : styles.buttonLabel} >{name}</Text>
            <MaterialIcons 
              name="arrow-drop-down" 
              size={20} 
              color={isSelected ? 'black': '#F5F5F5'}
              style={styles.buttonIcon}/>
          </TouchableOpacity>
        )
    }
    
    renderDropDown(){
        return (
          <View style={styles.dropDownContainer} onTouchStart={() => console.log('123456')}>
              <TouchableOpacity 
                style={styles.dropDownHeader}
                onPress={this.hideDropDown}>
                <Text style={{fontSize: 13, color: 'white', fontWeight: 'bold'}}>Select Unit</Text>
                <MaterialIcons 
                  name="arrow-drop-up" 
                  size={20} 
                  color='#F5F5F5'
                  style={styles.unitIcon}/>
              </TouchableOpacity>
              <FlatList
                    data={UNITS}
                    keyExtractor={item => item.id.toString()}
                    renderItem={this.renderDropDownItem}
                    listKey={12}
              />
          </View>
        )
    }
    
    render(){
        let {leftDropDownVisible, rightDropDownVisible} = this.state;
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Unit Convertor</Text>
                <View style={styles.row}>
                    {BUTTONLABELS.map(data => (
                        this.renderButton(data)
                    ))}
                </View>
                <View style={styles.convertorContainer}>
                    <View style={styles.convertorButton}>
                        {!leftDropDownVisible &&  (
                            <>
                                <TouchableOpacity style={styles.unitContainer} 
                                    onPress={this.toggleLeftDropDown}>
                                    <Text style={styles.unitLabel}>cm</Text>
                                    <MaterialIcons 
                                        name="arrow-drop-down" 
                                        size={20} 
                                        color='#F5F5F5'
                                        style={styles.unitIcon}/>
                                </TouchableOpacity>
                                <View style={{height: 25, borderLeftColor: '#F5F5F5', borderLeftWidth: 1, marginHorizontal: 5}}/>
                                <TextInput 
                                    placeholder="Value" 
                                    style={styles.unitInput}
                                    placeholderTextColor="#F5F5F5"
                                    keyboardType="number-pad" />
                            </>
                        )}
                        {leftDropDownVisible && (
                            this.renderDropDown()
                        )}
                    </View>
                    <FontAwesome name="exchange" size={14} color='#F5F5F5' style={{marginHorizontal: 15}}/>
                    <View style={styles.convertorButton}>
                        {!rightDropDownVisible &&  (
                            <>
                                <TouchableOpacity style={styles.unitContainer} 
                                    onPress={this.toggleRightDropDown}>
                                    <Text style={styles.unitLabel}>cm</Text>
                                    <MaterialIcons 
                                        name="arrow-drop-down" 
                                        size={20} 
                                        color='#F5F5F5'
                                        style={styles.unitIcon}/>
                                </TouchableOpacity>
                                <View style={{height: 25, borderLeftColor: '#F5F5F5', borderLeftWidth: 1, marginHorizontal: 5}}/>
                                <TextInput 
                                    placeholder="Value" 
                                    style={styles.unitInput}
                                    placeholderTextColor="#F5F5F5"
                                    keyboardType="number-pad" />
                            </>
                        )}
                        {rightDropDownVisible && (
                            this.renderDropDown()
                        )}
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        elevation: 1,
        zIndex: 1
    },
    title: {
        fontSize: 20,
        color: '#F5F5F5',
    },
    row: {
        flexDirection: 'row',
        height: 58,
        marginTop: 15,
        borderWidth: 1,
        borderColor: '#2D2D2D',
        borderRadius: 4
    },
    button: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    buttonLabel: {
        color: '#F5F5F5',
        fontSize: 13
    },
    buttonIcon: {
        marginLeft: 5
    },
    selectedButton: {
        flex: 1,
        backgroundColor: Colors.yellow,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    selectedButtonLabel: {
        color: 'black',
        fontSize: 13
    },
    convertorContainer: {
        height: 76,
        borderWidth: 1,
        borderColor: '#2D2D2D',
        marginVertical: 5,
        borderRadius: 4,
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        zIndex: 1,
    },
    convertorButton: {
        minHeight: 33,
        flex: 1,
        borderWidth: 1,
        borderColor: '#2D2D2D',
        borderRadius: 2,
        flexDirection: 'row',
        alignItems: 'center',
        elevation: 12,
    },
    unitContainer: {
        flexDirection: 'row',
        paddingLeft: 5
    },
    unitLabel: {
        color: '#F5F5F5',
        fontSize: 13
    },
    unitIcon: {
        marginLeft: 5
    },
    unitInput: {
        color: '#F5F5F5',
        fontSize: 12,
        flex: 1,
        padding: 0,
        paddingLeft: 5
    },
    dropDownContainer: {
        position: 'absolute',
        flex: 1,
        top: 0,
        width: '100%',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: Colors.blackBlue,
    },
    dropDownHeader: {
        height: 30,
        backgroundColor: 'black',
        borderRadius: 2,
        marginBottom: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    dropDownItem: {
        height: 40,
        width: '100%',
        backgroundColor: 'black',
        flexDirection: 'row',
        alignItems: 'center',
    },
})