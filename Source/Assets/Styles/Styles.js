import {Dimensions, StyleSheet} from 'react-native';
import Colors from '../../Utils/Colors';
import { PRIMARY } from '../Colors/baseColor';

const HEIGHT = Dimensions.get('window').height;

export default StyleSheet.create({
  SignIn_Tab_container: {
    backgroundColor: PRIMARY,
  },

  SignIn_title: {
    height: 100,
    width: '100%',
    backgroundColor: PRIMARY,
    alignItems: 'center',
    flexDirection: 'column',
  },

  SignIn_body: {
    flex: 1,
    backgroundColor: PRIMARY,
  },
  SignIn_Input: {
    marginTop: 25,
    fontSize: 13,
    height: 48,
    marginHorizontal: 18,
    fontFamily: 'Open Sans',
    backgroundColor: PRIMARY,
  },
  Checkbox_View: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 7,
    padding: 5,
  },

  Checkbox: {
    // borderColor: 'yellow',
    // borderWidth: 1,
  },
  Yellow_Button: {
    alignSelf: 'center',
    height: 43,
    width: 105,
    marginTop: 15,
  },
  Otp_View: {
    flexDirection: 'row',

    width: 411,
    width: '100%',
    justifyContent: 'space-evenly',
    padding: 35,
  },
  Otp_input: {
    height: 35,
    width: 35,
    borderWidth: 0.5,
    borderColor: Colors.white,
  },

  Line: {
    flex: 1,
    borderTopWidth: 0.6,
    borderTopColor: Colors.grey,
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },

  Google_image: {
    height: 55,
    width: 55,
  },

  Newuser_View: {
    flexDirection: 'row',

    alignItems: 'center',
  },

  Footer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 10
  },

  Signup_container: {
    backgroundColor: PRIMARY,
    flex: 1,
  },

  Signin_container: {
    backgroundColor: PRIMARY,
    flex: 1,
  },

  Dashboard_container: {
    backgroundColor: Colors.darkgrey,
    flex: 1,
    flexDirection: 'column',
  },
  Dashboard_body: {
    alignItems: 'center',

    justifyContent: 'space-evenly',

    margin: 1,
  },
  Dashboard_footer: {
    marginLeft: 20,
  },
  Quickaction_container: {
    height: 80,
    width: 355,

    borderRadius: 10,
    borderWidth: 0.7,
    borderColor: Colors.grey,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginTop: 7,
  },
  Quickaction_box: {
    height: 59,
    width: 59,
    borderRadius: 5,
    backgroundColor: Colors.grey,
  },
  Quickaction_textView: {
    flexDirection: 'column',
    marginLeft: 13,
    flex: 1,
  },
  Service_container: {
    backgroundColor: Colors.darkgrey,
    flexDirection: 'row',
    flex: 1,
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
  },
  C_materialContainer: {
    backgroundColor: Colors.darkgrey,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  C_materialScrollview: {},
  Button1: {
    backgroundColor: Colors.yellow,

  },
  Button2: {
    backgroundColor: Colors.blackBlue,
  },
  Landingpage_View: {

    alignItems: 'center',
    justifyContent: 'space-evenly',
    padding: 60,
  },
 container2: {
   flex:1,
flexDirection:'row',
width:790,
justifyContent:'center',
alignItems:'center',
margin:-70,
padding:-90
  },
  Notifications_Container: {
    backgroundColor: Colors.darkgrey,
  },
  Profile_container: {
    backgroundColor: Colors.darkgrey,
    flex: 1
  },
  CircularProgressBar: {
    shadowColor: Colors.lightgrey,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  Profile_Head: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
  },
  ProfileDetails_container: {
    backgroundColor: Colors.darkgrey,
    flex: 1,
    alignItems: 'center',
    minHeight: HEIGHT,
    padding: 10
  },
  Next: {
    backgroundColor: Colors.darkgrey,
    borderWidth: 1,
    borderColor: Colors.yellow,
    height: 40,
    width: 70,
    color: Colors.yellow
  },
  Aboutus_container: {
    height: 240,
    width: '100%',
    backgroundColor: Colors.blackBlue,
    marginTop: 20,
  },
  Aboutus_view: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
  },
  Aboutus_Footer: {
    borderTopWidth: 0.7,
    borderTopColor: Colors.white,
    marginHorizontal: 15,
  },
  Feedback_Input: {
    width: 264,
    height: 173,
    borderRadius: 10,
    backgroundColor: Colors.white,
    marginTop: 35,
  },
});
