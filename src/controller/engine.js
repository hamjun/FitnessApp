import activites from "./activities";
import { getWeight } from "./GoogleFit";

const getRecommendations = async() => {
  const weight = await getWeight();
  const recommendations = activites.map((activity, index) => {
    activity.id = index.toString();
    activity.calories = Math.round(activity.calories * weight);
    return activity;
  });
  recommendations.sort((a, b) => a.calories < b.calories);
  return recommendations;
}

export default getRecommendations;
