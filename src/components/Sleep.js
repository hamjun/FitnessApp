import React, { useState, useEffect } from "react";
import { Card, Text } from "react-native-elements";
import moment from "moment";

const cutoffHour = 18;

const Sleep = () => {
  const [sleep, setSleep] = useState({ time: 0, wakeUp: 0 });
  const now = moment();

  useEffect(() => {
    if (now.hour() >= cutoffHour) {
      setSleep((sleep) => {
        const sleepMoment = moment().hours(Math.max(now.hour(), 22));
        sleep.time = sleepMoment.format('hA');
        sleep.wakeUp = sleepMoment.add(9, 'hours').format('hA');
        return sleep;
      });
    }
  });

  return (
    <>
      {now.hour() >= cutoffHour && (
        <Card>
          <Card.Title>Sleep</Card.Title>
          <Text style={{ textAlign: "center" }}>
            Go to sleep by {sleep.time} in order to wake up by {""}
            {sleep.wakeUp} with a full night's rest.
          </Text>
        </Card>
      )}
    </>
  );
};

export default Sleep;
