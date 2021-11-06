import React from 'react';
import {View, Text, Image,ScrollView, TouchableHighlight, TouchableOpacity} from 'react-native';
import Styles from '../Assets/Styles/Styles';

import Arrow_button from '../Components/Arrow_button';
export default function NewLead({color,Days,time}) {
    return (
        <View>
         <View style={Styles.Dashboard_body}>
        
        <View style={{flexDirection:'row',
 justifyContent:'space-between',
 width:370,height:80,borderRadius:6,
 marginLeft:15,padding:13,borderColor:'grey',borderWidth:0.2,
 flexDirection:'row',marginBottom:4
 }}
  >
  <View  style={{padding:3,justifyContent:'space-between',alignText:'center'}}
  >
  <Text
  style={{color:'white'}}
  
  >Cement</Text>
  <Text style={{color:'white'}}
  >{time} hour ago</Text>
  </View>
  
  
  <View>
  <Text
  style={{color:'white'}}
  
  >Quantity 10</Text>
<TouchableOpacity>
  <View
  style={{backgroundColor:color,borderRadius:13,height:25,width:80,justifyContent:'center',padding:0,alignText:'center',alignItems:'center'}}
  >

<Text style={{color:'white'}}>
   
 {Days}</Text>

  </View>


</TouchableOpacity>
  
  </View>
  
  
   
 
 <View
 style={{alignItems:'center',justifyContent:'center'}}
 >
 <Arrow_button />
 </View>
  
  
  </View>
    </View>
        </View>
    )
}
