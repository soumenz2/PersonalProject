import React,{Component, useState} from 'react'
import 

{ View, 
  ScrollView,
  Text ,
  Image,
  StyleSheet,
  TextInput,
  FlatList,
} 
from 'react-native'

// import headerImage from '../Assets/Icons/HeaderIcon.png'
import imp1 from '../Assets/Icons/HeaderQuestion.png'
import imp2 from '../Assets/Icons/HeaderNotification.png';
import headerImage from './../Assets/Images/HomeWall.png';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Colors from '../Utils/Colors';

import CheckBox from 'react-native-check-box';

import RecentConversionComponent from '../Components/RecentConversionComponent';
import LeadComponent from './../Components/LeadComponent';
import UnitConvertorComponent from '../Components/UnitConvertorComponent';
import { TouchableOpacity } from 'react-native-gesture-handler';


export default class HomeScreen extends Component{

  render(){
    // let {dropDownVisible} = this.state;
    let array = new Array(1,2,3,4,5,6,7);
    return (
      <FlatList style={styles.container}
        ListEmptyComponent={
          <>
            <Image source={headerImage} style={styles.headerImage}/>
            <View style={styles.contentContainer}>
              <UnitConvertorComponent />
              <RecentConversionComponent />
              <LeadComponent />
            </View>
          </>
        }>
        
      </FlatList>
      // <View style={{flex: 1}}>
      //     <View style={{flex: 1, backgroundColor: 'green', elevation: -1}}></View>
      //     <View style={{flex: 1, backgroundColor: 'yellow'}}></View>
      //     <View style={{flex: 1, backgroundColor: 'blue', position: 'absolute', top: 100}}>
      //       <View style={{backgroundColor: 'red', height: 500, width: 200, elevation: 2}}>
      //         {array.map((data, index) => (
      //           <View style={{flex: 1}} key={index}>
      //              <TouchableOpacity 
                      
      //                 key={index} 
      //                 onPress={() => console.log('clicked')}>
      //                 <Text>sdfsdf</Text>
      //             </TouchableOpacity>
      //           </View>
      //         ))}
      //       </View>
      //     </View>
      // </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 3,
    backgroundColor: '#121417',
  },
  headerImage: {
    height: 180,
    width: '100%',
    resizeMode: 'stretch'
  },
  contentContainer: {
    padding: 10,
  },
})
