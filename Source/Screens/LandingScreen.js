import React,{useState} from 'react';
import {View, Text, Dimensions,Image,StatusBar, SafeAreaView,TouchableHighlight,TouchableOpacity} from 'react-native';
import Styles from '../Assets/Styles/Styles';
import LandingButtons from '../Components/LandingButtons';
import Usericonblack from '../Assets/Icons/1.png';
import Usericonyellow from '../Assets/Icons/2.png';
import CFlogo from '../Assets/Icons/CFlogo.png';
import Landingimage from '../Assets/Icons/Landingpageimage.png';
import SignUp from '../Screens/SignUp';
import SignIn from '../Components/SignIn_Component';
const LandingScreen = ({navigation}) => {
const [screenWidth, setScreenWidth] = useState(null)
const [screenHeight, setscreenHeight] = useState(null)
const _onLayout=(e)=>{
setScreenWidth(Dimensions.get('window').width)
setscreenHeight(Dimensions.get('window').height)

}
  return (
    <>
      <StatusBar
 barStyle="light-content"
translucent
 backgroundColor="transparent" />



<SafeAreaView 
style={screenHeight > screenWidth ? Styles.Landingpage_View : Styles.container2}
 onLayout={_onLayout}
>



   

<View>
<Image source={CFlogo} style={{marginTop:30,marginBottom:60,height: 80, width: 349}} />
<Image source={Landingimage} style={{marginTop:-20,marginLeft:59,height: 150,
        marginBottom:40,
        width: 234}} />




</View>

   
      <View>
      <Text style={{fontFamily: 'Open Sans',fontWeight:'bold', fontSize: 12,marginLeft:99,
        marginTop:20,marginBottom:10}}>
        Construct With Flow.
      </Text>
      <Text
        style={{
          fontWeight:'bold',
          color:'black',
          marginLeft:39,
          textAlign: 'center',
          width: 230,
          fontFamily: 'Open Sans',
          fontSize: 12,
          marginBottom:40
        }}>
        Get all services at your fingertips. Now keeping records of your
        products and deals has become easier with construction flow.
      </Text>
      <TouchableOpacity
      
        onPress={() => {
          navigation.navigate('SignUp');
        }}>
        <LandingButtons
          style={Styles.Button1}
          UserIcon={Usericonblack}
          Textt="Sign Up As Vendor"
          colorr={{color:'black',marginLeft:7,fontSize:17}}
        />
      </TouchableOpacity>
      <TouchableOpacity
   style={{marginBottom:40}}
        onPress={() => {
          
          navigation.navigate('SignInComponent');
        }}>
        <LandingButtons
          style={Styles.Button2}
          UserIcon={Usericonyellow}
          Textt="Sign In As Vendor"
          colorr={{color:'yellow',fontSize:17,marginLeft:7}}
        />
      </TouchableOpacity>

      </View>
     
  



</SafeAreaView>


      </>
  );
};

export default LandingScreen;
