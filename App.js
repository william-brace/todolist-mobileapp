/** @format */

import "react-native-gesture-handler";
import React from "react";
import TodoContainer from "./containers/TodoContainer";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <NavigationContainer>
      <TodoContainer />
    </NavigationContainer>
  );
}
