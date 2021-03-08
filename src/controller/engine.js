import getActivities from "./activities";
import Storage, { Keys } from "./storage";
import { getCurrentPositionAsync } from "expo-location";
import { getWeight } from "./GoogleFit";
import { WEATHER_API_PATH, WEATHER_API_KEY, WEATHER_API_QS } from "@env";
import moment from "moment";

const isPrecipation = async() => {
  try {
    const { coords: { latitude, longitude } } = await getCurrentPositionAsync();
    const URL = `${WEATHER_API_PATH}?lat=${latitude}&lon=${longitude}${WEATHER_API_QS}${WEATHER_API_KEY}`;
    const weather = await (await fetch(URL)).json();
    return weather.hourly[0].pop > 0.2;
  } catch (error) {
    return false;
  }
}

const getRecommendations = async() => {
  const weight = await getWeight();
  const time = moment().get('hour');
  const gymAccess = Storage.getBoolean(Keys.gym);
  const desiredIntensity = Storage.getNumber(Keys.activity) || 2;
  const precipation = isPrecipation();
  const recommendations = getActivities().map((activity, index) => {
      activity.id = index.toString();
      activity.calories = Math.round(activity.calories * weight);
      activity.score = 0 + activity.calories;
      if (time < activity.time) {
        activity.score += 200;
        if (gymAccess && activity.gym) {
          activity.score += 300;
        }
      } else {
        activity.score -=100;
      }
      if (!gymAccess && activity.gym) {
        activity.score -= 300;
      }
      activity.score += 250;
      if (activity.intensity != desiredIntensity) {
        const diff = activity.intensity - desiredIntensity;
        activity.score -= Math.abs(diff) * (diff > 0 ? 100 : 50);
      }
      if (precipation && activity.outside) {
        activity.score /= 2;
      }
      console.log(`${activity.name}: ${activity.score}`);
      return activity;
    });
    recommendations.sort((a, b) => a.score < b.score);
  return recommendations;
}

export default getRecommendations;
