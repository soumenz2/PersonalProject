import React from 'react';
import {View, Text, TouchableOpacity, TouchableHighlight} from 'react-native';
import Styles from '../Assets/Styles/Styles';
import Header_Component from '../Components/Header_Component';
import Service_card from '../Components/Service_card';
import C_materials from '../Assets/Icons/Construction_Materials.png';
import C_agents from '../Assets/Icons/Agents.png';
import C_vehicles from '../Assets/Icons/Construction_Vehicles.png';
import C_chemicals from '../Assets/Icons/construction_chemical.png';
import ConstructionMaterials from './ConstructionMaterials';
import ConstructionVehicles from './ConstructionVehicles';
import ConstructionChemicals from './ConstructionChemicals';

const Services = ({navigation}) => {
  return (
    <View style={Styles.Service_container}>
      <Header_Component Heading="Services" />
      <TouchableHighlight
        onPress={() => {
          navigation.navigate(ConstructionMaterials);
        }}>
        <Service_card Icon={C_materials} Name="Construction Materials" />
      </TouchableHighlight>
      <TouchableHighlight>
        <Service_card Icon={C_agents} Name="Agents" />
      </TouchableHighlight>
      <TouchableHighlight
        onPress={() => {
          navigation.navigate(ConstructionVehicles);
        }}>
        <Service_card Icon={C_vehicles} Name="Construction Vehicles" />
      </TouchableHighlight>
      <TouchableHighlight
        onPress={() => {
          navigation.navigate(ConstructionChemicals);
        }}>
        <Service_card Icon={C_chemicals} Name="Construction Chemicals" />
      </TouchableHighlight>
    </View>
  );
};

export default Services;
