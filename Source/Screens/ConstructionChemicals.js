import React from 'react';
import {View, ScrollView} from 'react-native';
import Styles from '../Assets/Styles/Styles';
import ConstructionMaterials_card from '../Components/ConstructionMaterials_card';
import Header_Component from '../Components/Header_Component';
import Concretemix from '../Assets/Icons/concreteadmixture.png';
import Waterproof from '../Assets/Icons/waterproof.png';
import Surfacetreats from '../Assets/Icons/surfacetreatment.png';
import Groutanchor from '../Assets/Icons/groutandanchor.png';
import Concreterepair from '../Assets/Icons/concreterepair.png';
import Sealant from '../Assets/Icons/sealant.png';
import Flooring from '../Assets/Icons/flooring.png';
import Tiling from '../Assets/Icons/tiling.png';

const ConstructionChemicals = () => {
  return (
    <View style={Styles.C_materialContainer}>
      <Header_Component Heading="Construction Chemicals" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={Styles.C_materialScrollview}>
        <ConstructionMaterials_card
          Icon={Concretemix}
          Title="Concrete Admixture"
        />
        <ConstructionMaterials_card Icon={Waterproof} Title="Waterproofing" />
        <ConstructionMaterials_card
          Icon={Surfacetreats}
          Title="Surface Treatments"
        />
        <ConstructionMaterials_card
          Icon={Groutanchor}
          Title="Grout and Anchor"
        />
        <ConstructionMaterials_card
          Icon={Concreterepair}
          Title="Concrete Repair"
        />
        <ConstructionMaterials_card Icon={Sealant} Title="Sealant" />
        <ConstructionMaterials_card Icon={Flooring} Title="Flooring" />
        <ConstructionMaterials_card Icon={Tiling} Title="Tiling" />
      </ScrollView>
    </View>
  );
};

export default ConstructionChemicals;
