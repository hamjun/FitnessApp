import React, { useState, useEffect } from "react";
import { Card, Text } from "react-native-elements";
import Storage, { Keys } from "../controller/storage";
import { getHeight, getWeight } from "../controller/GoogleFit";
import styles from "../styles/styles";

const BMR = () => {
  const [age, setAge] = useState(0);
  const [gender, setGender] = useState(0);
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmr, setBMR] = useState(0);

  const getAsyncData = async() => {
    setHeight(await getHeight());
    setWeight(await getWeight());
  }

  useEffect(() => {
    getAsyncData();
    setAge(Storage.getNumber(Keys.age));
    setGender(Storage.getNumber(Keys.gender));
  }, []);

  useEffect(() => {
    // Mifflin-St Jeor Equation
    const base = 10 * weight * 0.453592 + 6.25 * height * 100 - 5 * age;
    setBMR(gender === 0 ? base + 5 : base - 161);
  }, [age, gender, weight, height]);

  return (
    <>
      {bmr > 0 && (
        <Card>
          <Card.Title>Basal Metabolic Rate</Card.Title>
          <Text style={styles.cardText}>
            You should burn ~{Math.round(bmr)} calories today, {}
            not including any exercises you complete.
          </Text>
        </Card>
      )}
    </>
  )
}

export default BMR;
