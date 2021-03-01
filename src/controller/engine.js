import activites from "./activities";
import { getWeight } from "./GoogleFit";
import moment from "moment";

const getRecommendations = async() => {
  const weight = await getWeight();
  var time = moment().get('hour');
  console.log("TIME: "+ time);
  var gymAccess = false;
  var desiredIntensity = 3;
  const recommendations = activites.map((x,index) => {
      x.id = index.toString();
      x.calories = Math.round(x.calories * weight);
      x.score = x.calories;
      if(time < x.time)
      {
        x.score += 200;
        if(gymAccess && x.gym)
        {
            score += 300;
        }
      }
      else
      {
        x.score -=100;
      }

      if(!gymAccess && x.gym)
      {
        x.score -= 300;
      }

      if(desiredIntensity == x.intensity)
      {
        x.score += 250;
      }
      else
      {
        x.score -= Math.abs(x.intensity - desiredIntensity)*50;
      }
      console.log(x.score);
      return x;
    });
    recommendations.sort((a, b) => b.score - a.score);
  return recommendations;
}

export default getRecommendations;