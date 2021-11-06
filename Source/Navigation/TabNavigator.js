import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../Screens/Home';
import DashboardScreen from '../Screens/Dashboard';
import ProfileScreen from '../Screens/Profile';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '../Utils/Colors';
import { PRIMARY } from '../Assets/Colors/baseColor';

import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import NotificationTab from '../Screens/Notifications';
import Profile_Details from '../Screens/Profile_Details';
import Company_Details from '../Screens/Company_Details';
import Company_Address from '../Screens/Company_Address';
import PitchLeadScreen from '../Screens/PitchLeadScreen';
import LeadsScreen from '../Screens/LeadsScreen';

const Tab = createBottomTabNavigator();

const HomeStack = createStackNavigator();
const DashboardStack = createStackNavigator();
const ProfileStack = createStackNavigator();

const homeHeaderOptions = ({navigation}) => ({
  headerTitle: null,
  headerShown: true, 
  headerStyle: { backgroundColor: PRIMARY, elevation: 0}, 
  headerTintColor: Colors.yellow,
  headerRight: () => {
    return (
      <View style={{flexDirection: 'row', marginRight: 20, alignItems: 'center'}}>
        <TouchableOpacity style={{flexDirection: 'row', marginHorizontal: 20, alignItems: 'center'}}>
          <MaterialIcons name="help-outline" color="white" style={{marginRight: 5}} size={18}/>
          <Text style={{color: 'white', fontSize: 12, lineHeight: 20}}>Help</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('NotificationTab')}>
          <MaterialIcons name="notifications-none" size={22} color={Colors.yellow}/>
        </TouchableOpacity>
      </View>
    )
  },
  headerLeft: () => (
    <View style={{
        height: 36, 
        width: 36, 
        borderWidth: 1, 
        borderColor: Colors.yellow, 
        borderRadius: 18,
        marginLeft: 10,
        borderStyle: 'dashed'}}>
    </View>
  )
});

const dashbardHeaderOptions = ({navigation}) => ({
  headerTitleAlign: 'left',
  headerBackTitleVisible: false,
  headerShown: true, 
  headerStyle: { backgroundColor: PRIMARY, elevation: 0}, 
  headerTintColor: Colors.yellow,
  headerRight: () => {
    return (
      <View style={{flexDirection: 'row', marginRight: 20, alignItems: 'center'}}>
          <View style={{
            height: 36, 
            width: 36, 
            borderWidth: 1, 
            borderColor: Colors.yellow, 
            borderRadius: 18,
            marginLeft: 10,
            borderStyle: 'dashed', marginHorizontal: 25}}>
          </View>
        <TouchableOpacity onPress={() => navigation.navigate('NotificationTab')}>
          <MaterialIcons name="notifications-none" size={22} color={Colors.yellow}/>
        </TouchableOpacity>
      </View>
    )
  },
})

const profileHeaderOptions = ({navigation}) => ({
  headerBackTitleVisible: false,
  headerShown: true, 
  headerStyle: { backgroundColor: PRIMARY, elevation: 0}, 
  headerTintColor: Colors.yellow,
  headerRight: () => {
    return (
      <TouchableOpacity
        style={{marginRight: 20}}
        onPress={() => navigation.navigate('NotificationTab')}>
        <MaterialIcons name="notifications-none" size={22} color={Colors.yellow}/>
      </TouchableOpacity>
    )
  },
  headerLeft: () => (
    <View style={{
        height: 36, 
        width: 36, 
        borderWidth: 1, 
        borderColor: Colors.yellow, 
        borderRadius: 18,
        marginLeft: 10,
        borderStyle: 'dashed'}}>
    </View>
  )
});

function Home(){
  return (
    <HomeStack.Navigator screenOptions={homeHeaderOptions}>
      <HomeStack.Screen name="Home" component={HomeScreen}/>
    </HomeStack.Navigator>
  )
}

function Dashbard(){
  return (
    <DashboardStack.Navigator 
      screenOptions={dashbardHeaderOptions} 
      initialRouteName="Leads">
      <DashboardStack.Screen name="Dashbard" component={DashboardScreen}/>
      <DashboardStack.Screen name="PitchLead" component={PitchLeadScreen}/>
      <DashboardStack.Screen 
        name="Leads" 
        component={LeadsScreen} 
        options={{headerShown: false}}/>
    </DashboardStack.Navigator>
  )
}

function Profile(){
  return (
    <ProfileStack.Navigator 
      initialRouteName="Profile">
      <ProfileStack.Screen 
        name="Profile" 
        component={ProfileScreen}
        options={profileHeaderOptions}/>
      <ProfileStack.Screen 
        name="Profile_Details" 
        component={Profile_Details}
        options={{
          headerTitle: 'Profile Details', 
          headerStyle: {backgroundColor: 'black'}, headerTintColor: Colors.yellow}}
        />
      <ProfileStack.Screen 
        name="Company_Details" 
        component={Company_Details}
        options={{
          headerTitle: 'Company Details', 
          headerStyle: {backgroundColor: 'black'}, headerTintColor: Colors.yellow}}
        />
      <ProfileStack.Screen 
        name="Company_Address" 
        component={Company_Address} 
        options={{
          headerTitle: 'Company Address', 
          headerStyle: {backgroundColor: 'black'}, headerTintColor: Colors.yellow}}
        />
    </ProfileStack.Navigator>
  )
}

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Dashboard"
      tabBarOptions={{
        activeTintColor: Colors.yellow,
        inactiveTintColor: Colors.lightgrey,
        tabStyle: {
          justifyContent: 'center',
          alignItems: 'center'
        },
        safeAreaInsets: {bottom: 10},
        style: {
          height: 56, 
          backgroundColor: PRIMARY,
          borderTopWidth: 0
        }}}
        screenOptions={({route}) => ({
          tabBarIcon: ({focused}) => {
            const tintColor = focused ? Colors.yellow : Colors.lightgrey;
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home-outline' : 'home-outline';
            } else if (route.name === 'Dashboard') {
              iconName = focused ? 'grid-outline' : 'grid-outline';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'person-outline' : 'person-outline';
            }
            return <Ionicons name={iconName} size={18} color={tintColor} />;
          },
        })}>
      <Tab.Screen 
        name="Home" 
        component={Home} 
        options={{title: 'Home'}}
      />
      <Tab.Screen 
        name="Dashboard" 
        component={Dashbard} 
        options={{title: 'DashBoard'}} 
      />
      <Tab.Screen 
        name="Profile" 
        component={Profile} 
        options={{title: 'Profile', tabBarVisible: true}}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
