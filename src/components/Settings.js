import React from "react";
import { Button, Text } from "react-native-elements";
import { authorize } from "../controller/GoogleFit";

const Settings = () => {
  const googleFitSignin = () => {
    authorize();
  }

  return (
    <>
      <Text h1 style={{textAlign: 'center'}}>
        Settings
      </Text>
      <Button
        onPress={googleFitSignin}
        title="Sign in with Google Fit"
      />
    </>
  )
}

export default Settings;
