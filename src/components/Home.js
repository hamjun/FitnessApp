import React, { useState } from "react";
import { FlatList, View } from "react-native";
import Meal from './Meal';
import Recommendation from './Recommendation';
import getRecommendations from '../controller/engine';

const Home = () => {
  const [results, setResults] = useState([]);

  if (results.length === 0) {
    console.log(results);
    getRecommendations()
      .then((recommendations) => {
        console.log(recommendations);
        setResults(recommendations)
      });
  }

  return (
    <View>
      <Meal/>
      <FlatList
        numColumns={1}
        data={results}
        renderItem={({ item }) => <Recommendation data={item}/>}
      />
    </View>
  )
}

export default Home;
