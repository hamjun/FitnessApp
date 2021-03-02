import React, {useState, useEffect} from "react";
import { 
    StyleSheet,
    View, 
    TextInput,
    TouchableOpacity,
    ImageBackground,
    Text
} from "react-native";
import { GoogleSignin, GoogleSigninButton } from '@react-native-google-signin/google-signin';

//make a username and password input lines

const Login = ({navigation}) => {
    const [login, text1] = useState('');
    const [pass, text2] = useState('');
    
    useEffect(() => {
      GoogleSignin.configure({
        scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
        webClientId: '586484441686-am38m0i557i25c9ape9higk236ddogqm.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
        offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
        forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
        //accountName: '', // [Android] specifies an account name on the device that should be used
      });
    }, [])
    
    const signIn = async () => {
      try {
        await GoogleSignin.hasPlayServices();
        const userInfo = await GoogleSignin.signIn();
        //this.setState({ userInfo });
        console.log({userInfo})
      } catch (error) {
        console.log({error})
        if (error.code === statusCodes.SIGN_IN_CANCELLED) {
          // user cancelled the login flow
        } else if (error.code === statusCodes.IN_PROGRESS) {
          // operation (e.g. sign in) is in progress already
        } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
          // play services not available or outdated
        } else {
          // some other error happened
        }
      }
    };

    return (
      <View style={styles.container}>
        <Text style={styles.title}> Health Clock </Text>
        <ImageBackground
          style={styles.image}
          source={require('../assets/tempBackground.jpg')}
        />
        <TextInput
          style = {styles.login}
          placeholder = "Login"
          onChangeText = {text => text1(text)}
          value = {login}
        />
        <TextInput
          style = {styles.pass}
          placeholder = "Password"
          onChangeText = {text => text2(text)}
          value = {pass}
        />
        <View style = {styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={()=>navigation.navigate('Settings')}>
            <Text style={{fontSize: 20, color: 'white'}}> Login </Text>
          </TouchableOpacity>
          <GoogleSigninButton
            style={styles.button}
            size={GoogleSigninButton.Size.Wide}
            color={GoogleSigninButton.Color.Dark}
            onPress={signIn}/>
        </View>
      </View>
    )
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F4F4F4'
    },
    title: {
      fontSize: 35,
      color: `#2f4f4f`,
      marginTop: 50,
      marginBottom: 50
    },
    image: {
      width: 200,
      height: 200,
      margin: 10,
      marginBottom: 50
    },
    login: {
      alignItems: "center",
      justifyContent: 'center',
      borderColor: `#2f4f4f`,
      borderWidth: 1.5,
      width: 250,
      borderRadius: 10,
      marginBottom: 5
    },
    pass: {
      alignItems: "center",
      justifyContent: 'center',
      borderColor: `#2f4f4f`,
      borderWidth: 1.5,
      width: 250,
      borderRadius: 10,
      marginBottom: 0
    },
    buttonContainer: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: 0,
    },
    button: {
      alignItems: 'center',
      backgroundColor: '#1673B6',
      padding: 10,
      borderRadius: 10,
      height: 55,
      width: 150,
    },
  });
  export default Login;