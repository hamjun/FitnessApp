import React from "react";
import { TouchableOpacity, StyleSheet, View, Text } from "react-native";
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

const Settings = ({navigation}) => {
  var hour = new Date().getHours();

  var radio_props1 = [
    {label: 'Yes', value: 0 },
    {label: 'No', value: 1 }
  ];

  var radio_props2 = [
    {label: 'Lazy Bum', value: 0 },
    {label: 'Somewhat', value: 1 },
    {label: 'Hardcore', value: 2 }
  ];

  var gym = 0;
  var active = 0;

  return (
    <View style={styles.container}>
      <Text style={styles.title}> Settings </Text>
      <Text style = {styles.time}>
        Current Hour is: {hour} o'clock
      </Text>
      <Text style = {styles.question}> Do you have a gym avaiable for use? </Text>
      <RadioForm
          radio_props={radio_props1}
          initial={0}
          onPress={(value) => gym}
      />
      <Text style = {styles.question} >How active are you? </Text>
      <RadioForm
          radio_props={radio_props2}
          initial={0}
          onPress={(value) => active}
      />
      <TouchableOpacity
          style={styles.button}
          onPress={()=>navigation.navigate('Home')}>
          <Text style={{fontSize: 20, color: 'white'}}> Go to My Recomendations</Text>
        </TouchableOpacity>
    </View>
  );
  
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
    marginTop: 15,
    marginBottom: 5
  },
  time: {
    textAlign: 'center'
  },
  question: {
    fontSize: 20,
    color: `#2f4f4f`,
    marginTop: 15,
    marginBottom: 5
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#1673B6',
    padding: 10,
    borderRadius: 10,
    marginTop: 30,
    width: 500,
  }
});

export default Settings;
