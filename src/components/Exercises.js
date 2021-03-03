import React, { useState, useEffect } from "react";
import { FlatList, View } from "react-native";
import Recommendation from './Recommendation';
import getRecommendations from '../controller/engine';
import Storage, { Keys } from "../controller/storage";

const Excercises = () => {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    if (Storage.getBoolean(Keys.setup)) {
      getRecommendations()
        .then(setExercises)
        .catch(console.error);
    }
  }, []);

  return (
    <View>
      <FlatList
        numColumns={1}
        data={exercises}
        renderItem={({ item }) => <Recommendation data={item}/>}
      />
    </View>
  )
}

export default Excercises;
