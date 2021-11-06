import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import Styles from '../Assets/Styles/Styles';
import ConstructionMaterials_card from '../Components/ConstructionMaterials_card';
import Header_Component from '../Components/Header_Component';
import Dumper from '../Assets/Icons/dumper.png';
import Transmitmixer from '../Assets/Icons/transitmixerwhite.png';
import Crane from '../Assets/Icons/Crane.png';
import Crawlercrane from '../Assets/Icons/crawlercrane.png';
import Tyremountedcrane from '../Assets/Icons/TyreMountedCrane.png';
import Tipper from '../Assets/Icons/tipper.png';
import Compactor from '../Assets/Icons/Compactor.png';
import Excavator from '../Assets/Icons/excavator.png';
import Motorgrader from '../Assets/Icons/MotorGrader.png';
import Forklifter from '../Assets/Icons/ForkLifter.png';
import Truck from '../Assets/Icons/Truck.png';
import Tractor from '../Assets/Icons/Tractor.png';
import Tanker from '../Assets/Icons/Tanker.png';
import Roadroller from '../Assets/Icons/road-roller.png';
import Backhoeloader from '../Assets/Icons/BackhoeLoader.png';

const ConstructionVehicles = () => {
  return (
    <View style={Styles.C_materialContainer}>
      <Header_Component Heading="Construction Vehicles" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={Styles.C_materialScrollview}>
        <ConstructionMaterials_card Icon={Dumper} Title="Dumper" />
        <ConstructionMaterials_card
          Icon={Transmitmixer}
          Title="Transmit Mixer"
        />
        <ConstructionMaterials_card Icon={Crane} Title="Crane" />
        <ConstructionMaterials_card Icon={Crawlercrane} Title="Crawler Crane" />
        <ConstructionMaterials_card
          Icon={Tyremountedcrane}
          Title="Tyre Mounted Crane"
        />
        <ConstructionMaterials_card Icon={Tipper} Title="Tipper" />
        <ConstructionMaterials_card Icon={Compactor} Title="Compactor" />
        <ConstructionMaterials_card Icon={Excavator} Title="Excavator" />
        <ConstructionMaterials_card Icon={Motorgrader} Title="Motor Grader" />
        <ConstructionMaterials_card Icon={Forklifter} Title="Fork Lifter" />
        <ConstructionMaterials_card Icon={Truck} Title="Truck" />
        <ConstructionMaterials_card Icon={Tractor} Title="Tractor" />
        <ConstructionMaterials_card Icon={Tanker} Title="Tanker" />
        <ConstructionMaterials_card Icon={Roadroller} Title="Road-Roller" />
        <ConstructionMaterials_card
          Icon={Backhoeloader}
          Title="Back Hoe Holder"
        />
      </ScrollView>
    </View>
  );
};

export default ConstructionVehicles;
