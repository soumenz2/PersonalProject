import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import NotificationCard from './NotificationCard';
import Pinwhite from '../Assets/Icons/pinwhite.png';
import Deletewhite from '../Assets/Icons/deletewhite.png';
import Styles from '../Assets/Styles/Styles';
import TextStyles from '../Assets/Styles/TextStyles';

const AllNotifications_View = () => {
  return (
    <View style={Styles.C_materialContainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={[TextStyles.White_text, {fontSize: 23, margin: 10}]}>
          Today
        </Text>
        <NotificationCard
          Title="Construction Flow"
          Pin={Pinwhite}
          Delete={Deletewhite}
          Description="New service added to Construction Chemicals"
        />
        <NotificationCard
          Title="Construction Flow"
          Pin={Pinwhite}
          Delete={Deletewhite}
          Description="New service added to Construction Chemicals"
        />
        <Text style={[TextStyles.White_text, {fontSize: 23, margin: 10}]}>
          Yesterday
        </Text>
        <NotificationCard
          Title="Construction Flow"
          Pin={Pinwhite}
          Delete={Deletewhite}
          Description="New service added to Construction Chemicals"
        />
        <NotificationCard
          Title="Construction Flow"
          Pin={Pinwhite}
          Delete={Deletewhite}
          Description="New service added to Construction Chemicals"
        />
        <Text style={[TextStyles.White_text, {fontSize: 23, margin: 10}]}>
          Yesterday
        </Text>
        <NotificationCard
          Title="Construction Flow"
          Pin={Pinwhite}
          Delete={Deletewhite}
          Description="New service added to Construction Chemicals"
        />
      </ScrollView>
    </View>
  );
};

export default AllNotifications_View;
