/** @format */

import React, { useEffect, useState } from "react";
import { StyleSheet, Keyboard, TouchableWithoutFeedback } from "react-native";
import FinishedPage from "./finishedPage";
import TodoPage from "./TodoPage";
import { Ionicons } from "@expo/vector-icons";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const TodoContainer = () => {
  const [tasks, setTasks] = useState([
    { name: "Wash clothes", completed: false },
    { name: "Wash clothes", completed: false },
    { name: "Wash clothes", completed: false },
    { name: "Wash clothes", completed: false },
  ]);
  const [focus, setFocus] = useState(null);

  const Tab = createBottomTabNavigator();

  useEffect(() => {
    console.log(tasks);
    console.log(focus);
  }, [tasks]);

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "FINISHED") {
            iconName = focused ? "list" : "list-outline";
          } else if (route.name === "TODO") {
            iconName = focused ? "checkbox" : "checkbox-outline";
          }

          size = 30;

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#2196F3",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen
        name="TODO"
        children={() => (
          <TodoPage
            tasks={tasks}
            setTasks={setTasks}
            focus={focus}
            setFocus={setFocus}
          />
        )}
      />
      <Tab.Screen
        name="FINISHED"
        children={() => (
          <FinishedPage
            tasks={tasks}
            setTasks={setTasks}
            focus={focus}
            setFocus={setFocus}
          />
        )}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  grey: {
    backgroundColor: "#F2F3F7",
  },
  fillScreen: {
    flex: 1,
  },
});

export default TodoContainer;
