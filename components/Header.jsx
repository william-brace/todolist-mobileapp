/** @format */

import React from "react";
import {
  View,
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
} from "react-native";
import styles from "../styles.js";
import { AntDesign } from "@expo/vector-icons";

const Header = ({ headerText, add, setTasks, tasks, focus, setFocus }) => {
  const logo = {
    uri: "https://reactnative.dev/img/tiny_logo.png",
    width: 30,
    height: 30,
  };

  const handleAddTask = () => {
    if (tasks && tasks.length >= 1 && tasks[tasks.length - 1].name.length < 1)
      setTasks(tasks);
    else {
      const newTask = { name: "", completed: false };
      setTasks([...tasks, newTask]);
      setFocus(newTask);
    }
  };

  return (
    <View style={[localStyles.headerAdd, styles.padding, styles.margin]}>
      <Text style={localStyles.textStyles}>{headerText}</Text>
      {add && (
        <TouchableHighlight onPress={handleAddTask} underlayColor="white">
          {/* <Image source={logo} /> */}
          <AntDesign name="plussquare" size={48} color="#2196F3" />
        </TouchableHighlight>
      )}
    </View>
  );
};

const localStyles = StyleSheet.create({
  headerAdd: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
  },
  textStyles: {
    fontSize: 30,
    fontWeight: "bold",
  },
});

export default Header;
