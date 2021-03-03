import GoogleFit, { Scopes } from "react-native-google-fit";
import moment from "moment";

export const isAuthorized = () => GoogleFit.isAuthorized;

export const authorize = async() => {
  const options = {
    scopes: [
      Scopes.FITNESS_ACTIVITY_READ,
      Scopes.FITNESS_BODY_READ,
      Scopes.FITNESS_NUTRITION_READ,
    ],
  }
  return GoogleFit.authorize(options);
}

export const getHeight = async() => {
  try {
    await authorize();
    const response = await GoogleFit.getHeightSamples({
      startDate: moment().subtract(1, "month").toISOString(),
      endDate: moment().toISOString(),
    });
    console.log(response);
    return response.length ? response[0].value : 0;
  } catch (error) {
    return 0;
  }
}

export const getWeight = async() => {
  await authorize();
  const response = await GoogleFit.getWeightSamples({
    unit: "pound",
    startDate: moment().subtract(1, "month").toISOString(),
    endDate: moment().toISOString(),
  });
  return response[0].value;
}

export const getWater = async() => {
  try {
    await authorize();
    const response = await GoogleFit.getHydrationSamples({
      startDate: moment().hours(0).toISOString(),
      endDate: moment().toISOString(),
    });
    const liters = response.length ? response[0].waterConsumed : 0;
    return liters * 33.814;
  } catch (error) {
    return 0;
  }
}
