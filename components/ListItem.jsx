/** @format */

import React from "react";
import {
  TouchableHighlight,
  Image,
  View,
  TextInput,
  Keyboard,
  KeyboardAvoidingView,
} from "react-native";
import styles from "../styles";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

const ListItem = ({ task, setTasks, tasks, focus, setFocus }) => {
  const logo = {
    uri: "https://reactnative.dev/img/tiny_logo.png",
    width: 45,
    height: 45,
  };


  //Need to move these mthods to ToDoCointainer component as components should only update their own state. 
  //These functions should be passed down as props and called within a wrapper function from props.

  const handleTaskChange = (text, task) => {
    setTasks(
      tasks.map((item) => {
        return item === task ? { ...item, name: text } : item;
      })
    );
  };

  const handleTaskComplete = () => {
    if (task.name.length < 1) return;
    setFocus(null);
    setTasks(
      tasks.map((item) => {
        return item === task ? { ...item, completed: !item.completed } : item;
      })
    );
  };

  const handleTaskDelete = () => {
    setFocus(null);
    console.log(tasks);
    let newTasks = tasks.filter((item) => item != task);

    setTasks(
      newTasks.filter((item) => {
        return item.name.length >= 1;
      })
    );
  };

  return (
    
    <View style={[styles.pink, styles.taskCard]}>
      <TouchableHighlight onPress={handleTaskComplete} underlayColor="white">
        <Ionicons
          name={task.completed ? "radio-button-on" : "radio-button-off"}
          size={36}
          color="#69DB7C"
        />
      </TouchableHighlight>
      <TextInput
        style={styles.taskFont}
        onChangeText={(text) => handleTaskChange(text, task)}
        onSubmitEditing={() => {
          setTasks(tasks.filter((item) => item.name.length > 0));
          setFocus(null);
        }}
        autoFocus={focus === task ? true : false}
        onFocus={() => setFocus(task)}
      >
        {task.name}
      </TextInput>
      <TouchableHighlight onPress={handleTaskDelete} underlayColor="white">
        <FontAwesome name="trash" size={36} color="#F03E3E" />
      </TouchableHighlight>
    </View>
  );
};

export default ListItem;
