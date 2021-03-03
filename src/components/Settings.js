import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
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

const genderProps = [
  {label: 'Male', value: 0 },
  {label: 'Female', value: 1 }
];

const Settings = () => {
  const [gym, setGym] = useState(Storage.getBoolean(Keys.gym) || false);
  const [activity, setActivity] = useState(Storage.getNumber(Keys.activity) || 1);
  const [age, setAge] = useState(Storage.getNumber(Keys.age) || 18);
  const [gender, setGender] = useState(Storage.getNumber(Keys.gender) || 0);

  useEffect(() => {
    Storage.set(Keys.gym, gym);
    console.log(`Gym: ${Storage.getBoolean(Keys.gym)}`);
  }, [gym]);

  useEffect(() => {
    Storage.set(Keys.activity, activity);
    console.log(`Activity: ${Storage.getNumber(Keys.activity)}`);
  }, [activity]);

  useEffect(() => {
    Storage.set(Keys.age, Math.max(Math.min(age, 100), 18));
  }, [age]);

  useEffect(() => {
    Storage.set(Keys.gender, gender);
  }, [gender]);

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
      <Text style={styles.question}>Age</Text>
      <TextInput
        style={styles.ageInput}
        keyboardType="numeric"
        onChangeText={(text) => !isNaN(text) && setAge(Number(text))}
        value={`${age}`}
      />
      <Text style={styles.question}>Gender</Text>
      <RadioForm
        radio_props={genderProps}
        initial={gender}
        formHorizontal
        labelHorizontal={false}
        onPress={setGender}
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
  ageInput: {
    fontSize: 15,
    textAlign: 'center',
    width: 50,
    backgroundColor: 'white',
  }
});

export default Settings;
