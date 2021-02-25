import React from "react";
import { 
    StyleSheet,
    View, 
    TextInput,
    TouchableOpacity,
    ImageBackground,
    Text
} from "react-native";

//make a username and password input lines

const Login = () => {
    const [login, text1] = React.useState('');
    const [pass, text2] = React.useState('');

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
            onPress={() => navigation.navigate('Goal')}>
            <Text style={{fontSize: 20, color: 'white'}}> Login </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Goal')}>
            <Text style={{fontSize: 20, color: 'white'}}> Google? </Text>
          </TouchableOpacity>
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
      width: 100,
    },
  });
  export default Login;