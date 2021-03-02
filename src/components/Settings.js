import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import RadioForm from "react-native-simple-radio-button";
import Storage, { Keys } from "../controller/storage";

const gymProps = [
  {label: 'No', value: false },
  {label: 'Yes', value: true }
];

const activityLevelProps = [
  {label: 'Mildly', value: 1 },
  {label: 'Average', value: 2 },
  {label: 'Extremely', value: 3 }
];

const Settings = () => {
  const [gym, setGym] = useState(Storage.getBoolean(Keys.gym) || false);
  const [activity, setActivity] = useState(Storage.getNumber(Keys.activity) || 1);

  useEffect(() => {
    Storage.set(Keys.gym, gym);
    console.log(`Gym: ${Storage.getBoolean(Keys.gym)}`);
  }, [gym]);

  useEffect(() => {
    Storage.set(Keys.activity, activity);
    console.log(`Activity: ${Storage.getNumber(Keys.activity)}`);
  }, [activity]);

  return (
    <View style={styles.container}>
      <Text style={styles.question}>Do you have a gym available for use?</Text>
      <RadioForm
        radio_props={gymProps}
        initial={Number(gym)}
        onPress={setGym}
      />
      <Text style={styles.question}>How active are you?</Text>
      <RadioForm
        radio_props={activityLevelProps}
        initial={activity - 1}
        onPress={setActivity}
      />
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
  question: {
    fontSize: 20,
    color: `#2f4f4f`,
    marginTop: 15,
    marginBottom: 5
  },
});

export default Settings;
