import React from "react";
import { Button, StyleSheet, View } from "react-native";
import { StackActions } from '@react-navigation/native';
import * as Location from "expo-location";
import Settings from "./Settings";
import { isAuthorized, authorize } from "../controller/GoogleFit";
import Storage, { Keys } from "../controller/storage";

const Setup = ({ navigation }) => {
  const signIn = () => {
    authorize()
      .then(console.log)
      .catch(console.error);
  }

  const submit = async() => {
    if (isAuthorized()) {
      await Location.requestPermissionsAsync();
      Storage.set(Keys.setup, true);
      navigation.dispatch(StackActions.replace("Home"));
    }
  }

  return (
    <View style={styles.container}>
      <Button title="Sign in with Google" onPress={signIn} />
      <View style={styles.settings}>
        <Settings />
      </View>
      <Button title="Done" onPress={submit} />
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
  settings: {
    maxHeight: '80%'
  }
});

export default Setup;
