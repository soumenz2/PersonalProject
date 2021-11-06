import * as React from 'react';
import {View, Text, StyleSheet, Dimensions, StatusBar} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import Colors from '../Utils/Colors';
import Styles from '../Assets/Styles/Styles';
import NewNotifications_View from '../Components/NewNotifications_View';
import PinnedNotifications_View from '../Components/PinnedNotifications_View';
import AllNotifications_View from '../Components/AllNotifications_View';

import Notification_header from '../Components/Notification_header';

const FirstRoute = () => <NewNotifications_View />;

const SecondRoute = () => <PinnedNotifications_View />;
const ThirdRoute = () => <AllNotifications_View />;

const initialLayout = {width: Dimensions.get('window').width};

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  third: ThirdRoute,
});

const renderTabBar = props => (
  <TabBar
    {...props}
    indicatorStyle={{backgroundColor: '#FFB600'}}
    style={{backgroundColor: Colors.darkgrey, width: 200, height: 48}}
    activeColor={Colors.yellow}
    inactiveColor={Colors.white}
    renderLabel={({route, color}) => (
      <Text style={{color, fontFamily: 'Open Sans'}}>{route.title}</Text>
    )}
  />
);
export default function NotificationTab() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'New '},
    {key: 'second', title: 'Pinned'},
    {key: 'third', title: 'All'},
  ]);

  return (
    <>
      <StatusBar backgroundColor="black"/>
      <TabView
        renderTabBar={renderTabBar}
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
        style={[Styles.Notifications_Container]}
      />
    </>
  );
}
