import React from "react";
import { View } from "react-native";
import { Button } from "react-native-elements";
import Food from './Food';
import Sleep from './Sleep';
import BMR from './BMR';
import styles from "../styles/styles";

const Home = ({ navigation }) => {

  return (
    <View>
      <Food />
      <Sleep />
      <BMR />
      <Button
        buttonStyle={styles.getExercisesButton}
        title="Get Recommended Exercises"
        onPress={() => navigation.navigate("Exercises")}
      />
    </View>
  )
}

export default Home;
