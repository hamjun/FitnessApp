import React from "react";
import { Text } from "react-native";
import { Card } from "react-native-elements";

const Recommendation = (props) => {
  const { data } = props;
  const { name, calories } = data;
  return (
    <Card>
      <Card.Title>{name}</Card.Title>
      <Text>
        Estimated calories burned: { calories }
      </Text>
    </Card>
  );
};

export default Recommendation;
