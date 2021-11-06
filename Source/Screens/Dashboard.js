import React from 'react';
import {View, Text, Image,ScrollView, TouchableHighlight, TouchableOpacity} from 'react-native';
import Styles from '../Assets/Styles/Styles';
import TextStyles from '../Assets/Styles/TextStyles';
import Ad_card from '../Components/Ad_card';
import Dashboard_card from '../Components/Dashboard_card';
import Main_HeaderComponent from '../Components/Main_HeaderComponent';
import ServicesIcon from '../Assets/Icons/Services_icon.png';
import Services from './Services';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '../Utils/Colors';
import Profile_card from '../Components/Profile_card';
import Arrow_button from '../Components/Arrow_button';
import NewLead from '../Components/NewLead';
import PitchLead from '../Components/PitchedLead'
const Dashboard = ({navigation}) => {
  return (
      <ScrollView 
        style={{
            backgroundColor: Colors.darkgrey,
            flex: 1,
            flexDirection: 'column'}}>
            
          <View style={{padding:20}}>
            <TouchableOpacity
              onPress={()=>navigation.navigate('Services')}>
              <Profile_card title="Service" />
            </TouchableOpacity>
            <TouchableOpacity 
              onPress={() => navigation.navigate('Leads')}>
              <Profile_card title="Lead" />
            </TouchableOpacity>
            <TouchableOpacity>
              <Profile_card title="Dashboard" />
            </TouchableOpacity>
          </View>
        <View style={{margin:8,justifyContent:'space-between',flexDirection:'row',padding:4,borderBottomWidth:1,borderColor:'grey'}}>
          <Text style={{fontSize:18,color:'white'}}>
            New Leads 
          </Text>
          <Text style={{fontSize:16,color:'#ffb600'}}>
            View all
          </Text> 
        </View>
        <NewLead
            time="2"
            color="red"
            Days="Urgent"
        />
        <NewLead
          time="4"
          Days="2 days"
          color='lime'
        />
                        
        <View style={{margin:8,justifyContent:'space-between',flexDirection:'row',padding:4,borderBottomWidth:1,borderColor:'grey'}}>
          <Text style={{fontSize:18,color:'white'}}>
            Pitched Lead
          </Text>
          <Text style={{fontSize:16,color:'#ffb600'}}>
            View all
          </Text> 
        </View>
        <PitchLead
          name="Abhishek"
          rupees="Rs 2000"
        />
        <PitchLead
          name="Abhishek"
          rupees="Rs 2000" />
    </ScrollView>);
};

export default Dashboard;
