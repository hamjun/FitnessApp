import GoogleFit, { Scopes } from "react-native-google-fit";
import moment from "moment";

export const isAuthorized = () => GoogleFit.isAuthorized;

export const authorize = async() => {
  const options = {
    scopes: [
      Scopes.FITNESS_ACTIVITY_READ,
      Scopes.FITNESS_BODY_READ,
    ],
  }
  return GoogleFit.authorize(options);
}

export const getWeight = async() => {
  const response = await GoogleFit.getWeightSamples({
    unit: "pound",
    startDate: moment().subtract(1, "month").toISOString(),
    endDate: moment().toISOString(),
  });
  console.log(response);
  return response[0].value;
}
