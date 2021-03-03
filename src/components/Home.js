import React, { useState, useEffect } from "react";
import { FlatList, View } from "react-native";
import Food from './Food';
import Sleep from './Sleep';
import BMR from './BMR';
import Recommendation from './Recommendation';
import getRecommendations from '../controller/engine';
import Storage, { Keys } from "../controller/storage";

const Home = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (Storage.getBoolean(Keys.setup)) {
      getRecommendations()
        .then((recommendations) => {
          console.log(recommendations);
          setResults(recommendations);
        })
        .catch(console.error);
    }
  }, []);

  return (
    <View>
      <Food />
      <Sleep />
      <BMR />
      <FlatList
        numColumns={1}
        data={results}
        renderItem={({ item }) => <Recommendation data={item}/>}
      />
    </View>
  )
}

export default Home;
