import React from "react";
import { Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./components/Home";
import Exercises from "./components/Exercises";
import Settings from "./components/Settings";
import Setup from "./components/Setup";
import Storage, { Keys } from "./controller/storage";

const Stack = createStackNavigator();

const App = () => {

  const initialRoute = Storage.getBoolean(Keys.setup) ? "Home" : "Setup";

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={initialRoute}>
        <Stack.Screen
          name="Home"
          component={Home}
          options={({ navigation }) => ({
            title: "Home",
            headerRight: () => (
              <Button
                title="Settings"
                onPress={() => navigation.navigate("Settings")}
              />
            ),
          })}
        />
        <Stack.Screen name="Settings" component={Settings} options={{title: "Settings"}} />
        <Stack.Screen name="Exercises" component={Exercises} options={{title: "Exercises"}} />
        <Stack.Screen name="Setup" component={Setup} options={{title: "Setup"}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
