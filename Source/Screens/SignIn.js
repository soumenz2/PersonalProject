import * as React from 'react';
import {View, Text, StyleSheet, Dimensions, StatusBar} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import Colors from '../Utils/Colors';
import Styles from '../Assets/Styles/Styles';
import EmailId_View from '../Components/EmailId_View';
import MobileNo_View from '../Components/MobileNo_View';
import TextStyles from '../Assets/Styles/TextStyles';

const FirstRoute = () => <EmailId_View />;

const SecondRoute = () => <MobileNo_View />;

const initialLayout = {width: Dimensions.get('window').width};

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});

const renderTabBar = props => (
  <TabBar
    {...props}
    indicatorStyle={{backgroundColor: '#FFB600'}}
    style={{backgroundColor: '#08090C', width: '100%', height: 48}}
    activeColor="white"
    inactiveColor="white"
    renderLabel={({route, color}) => (
      <Text style={{color, fontFamily: 'Open Sans'}}>{route.title}</Text>
    )}
  />
);
export default function TabViewExample() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'E-mail Id'},
    {key: 'second', title: 'Mobile No'},
  ]);

  return (
    <>
      <View style={[Styles.SignIn_title]}>
        <Text style={[TextStyles.SignIn_titleText]}>Sign In</Text>
      </View>
      <TabView
        renderTabBar={renderTabBar}
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
        style={[Styles.SignIn_Tab_container]}
      />
    </>
  );
}
