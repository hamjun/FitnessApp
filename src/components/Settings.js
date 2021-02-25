import React from "react";
import { StyleSheet, View, Text } from "react-native";

const Settings = () => {
  var hour = new Date().getHours();

  return (
    <View style={styles.container}>
      <Text style={{textAlign: 'center'}}> Settings </Text>
      <Text style = {styles.time}>
        Current Hour is: {hour} o'clock
      </Text>
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
  time: {
    textAlign: 'center'
  }
});

export default Settings;
