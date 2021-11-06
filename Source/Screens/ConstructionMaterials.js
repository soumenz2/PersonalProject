import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import Styles from '../Assets/Styles/Styles';
import ConstructionMaterials_card from '../Components/ConstructionMaterials_card';
import Header_Component from '../Components/Header_Component';
import Cement from '../Assets/Icons/cement.png';
import Bricks from '../Assets/Icons/BB.png';
import Sand from '../Assets/Icons/sand.png';
import Stones from '../Assets/Icons/stone.png';
import Rmc from '../Assets/Icons/Rmc.png';
import Tmt from '../Assets/Icons/TNT.png';
import Marble_tiles from '../Assets/Icons/Marbleandtiles.png';
import Pipes from '../Assets/Icons/pipes.png';
import Paint_Putty from '../Assets/Icons/Paint_Putty.png';
import Shuttering from '../Assets/Icons/Shuttering.png';

const ConstructionMaterials = () => {
  return (
    <View style={Styles.C_materialContainer}>
      <Header_Component Heading="Construction Materials" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={Styles.C_materialScrollview}>
        <ConstructionMaterials_card Icon={Cement} Title="Cement" />
        <ConstructionMaterials_card Icon={Bricks} Title="Bricks and Blocks" />
        <ConstructionMaterials_card Icon={Sand} Title="Sand" />
        <ConstructionMaterials_card Icon={Stones} Title="Stones" />
        <ConstructionMaterials_card Icon={Rmc} Title="RMC Mixture" />
        <ConstructionMaterials_card Icon={Tmt} Title="TMT Iron and Steel" />
        <ConstructionMaterials_card
          Icon={Marble_tiles}
          Title="Marble and Tiles"
        />
        <ConstructionMaterials_card Icon={Pipes} Title="Pipes" />
        <ConstructionMaterials_card
          Icon={Paint_Putty}
          Title="Paint and Putty"
        />
        <ConstructionMaterials_card Icon={Shuttering} Title="Shuttering" />
      </ScrollView>
    </View>
  );
};

export default ConstructionMaterials;
