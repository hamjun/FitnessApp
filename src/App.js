import React, { useState } from "react";
import { ActivityIndicator, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Login from "./components/Login";
import Home from "./components/Home";
import Settings from "./components/Settings";
import { isAuthorized, authorize } from "./controller/GoogleFit";

const Tab = createBottomTabNavigator();

export default function App() {
  const [auth, setAuth] = useState(false);
  if (!auth && !isAuthorized()) {
    authorize()
      .then(setAuth(true))
      .catch(console.error);
    return (
      <View>
        <ActivityIndicator size="large"/>
      </View>
    )
  }
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Login" component={Login}/>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
