import getActivities from "./activities";
import Storage, { Keys } from "./storage";
import { getWeight } from "./GoogleFit";
import moment from "moment";

const getRecommendations = async() => {
  const weight = await getWeight();
  const time = moment().get('hour');
  const gymAccess = Storage.getBoolean(Keys.gym);
  const desiredIntensity = Storage.getNumber(Keys.activity) || 2;
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
      console.log(`${activity.name}: ${activity.score}`);
      return activity;
    });
    recommendations.sort((a, b) => a.score < b.score);
  return recommendations;
}

export default getRecommendations;