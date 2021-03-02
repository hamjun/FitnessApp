import React, { useState, useEffect } from "react";
import { FlatList, View } from "react-native";
import Meal from './Meal';
import Recommendation from './Recommendation';
import getRecommendations from '../controller/engine';
import Storage, { Keys } from "../controller/storage";
import { authorize } from "../controller/GoogleFit";

const Home = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (Storage.getBoolean(Keys.setup)) {
      authorize()
        .then(getRecommendations)
        .then((recommendations) => {
          console.log(recommendations);
          setResults(recommendations);
        })
        .catch(console.error);
    }
  }, []);

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
