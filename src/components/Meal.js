import React from "react";
import { Card, Text } from "react-native-elements";

const Meal = () => {
  return (
    <Card>
      <Card.Title>Next Meal: Breakfast</Card.Title>
      <Text style={{ textAlign: "center" }}>
        Consume less than 500 calories
      </Text>
    </Card>
  );
};

export default Meal;
