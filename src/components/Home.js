import React from "react";
import { FlatList, View } from "react-native";
import Meal from './Meal';
import Recommendation from './Recommendation';
import getRecommendations from '../controller/engine';

const Home = () => {
  const recommendations = getRecommendations();
  return (
    <View>
      <Meal/>
      <FlatList
        numColumns={1}
        data={recommendations}
        renderItem={({ item }) => <Recommendation data={item}/>}
      />
    </View>
  )
}

export default Home;
