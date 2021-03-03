import React, { useState, useEffect } from "react";
import { Card, Text } from "react-native-elements";
import moment from "moment";
import { getWeight, getWater } from "../controller/GoogleFit";
import Storage, { Keys } from "../controller/storage";
import styles from "../styles/styles";

const Food = () => {
  const [meal, setMeal] = useState({ name: "", calories: 0 });
  const [water, setWater] = useState({ consumed: 0, goal: 0});

  const getWaterInfo = async() => {
    if (Storage.getBoolean(Keys.setup)) {
      try {
        const consumed = Math.round(await getWater());
        const goal = Math.round(await getWeight() / 2);
        setWater({ consumed, goal });
      } catch (error) {}
    }
  }

  useEffect(() => {
    getWaterInfo();
    setMeal((meal) => {
      const hour = moment().hour();
      if (hour <= 9 || hour > 21) {
        meal.name = "Breakfast";
        meal.calories = 500;
      } else if (hour > 9 && hour < 15) {
        meal.name = "Lunch";
        meal.calories = 750;
      } else if (hour >= 15 && hour < 21) {
        meal.name = "Dinner";
        meal.calories = 750;
      }
      return meal;
    });
  }, []);

  return (
    <>
      <Card>
        <Card.Title>Next Meal: {meal.name}</Card.Title>
        <Text style={styles.cardText}>
          Try to limit {meal.name.toLowerCase()} to {meal.calories} calories.
        </Text>
      </Card>
      <Card>
        <Card.Title>Hydration</Card.Title>
        <Text style={styles.cardText}>
          You've logged {water.consumed}oz of water today.
        </Text>
        {water.consumed >= water.goal && (
          <Text style={styles.cardText}>
            Great job passing the target of {water.goal}oz!
          </Text>
        )}
        {water.consumed < water.goal && (
          <Text style={styles.cardText}>
            You should drink {water.goal - water.consumed}oz more today.
          </Text>
        )}
      </Card>
    </>
  );
};

export default Food;
