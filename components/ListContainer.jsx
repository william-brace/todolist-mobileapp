/** @format */

import React from "react";
import { View, KeyboardAvoidingView, ScrollView, Text } from "react-native";
import ListItem from "./ListItem";
import styles from "../styles";

const ListContainer = ({ tasks, setTasks, showCompleted, focus, setFocus }) => {
  return (
    <ScrollView>
      {tasks &&
        tasks.map((task) => {
          if (task.completed == showCompleted)
            return (
              <ListItem
                task={task}
                tasks={tasks}
                setTasks={setTasks}
                focus={focus}
                setFocus={setFocus}
              />
            );
        })}
    </ScrollView>
  );
};

export default ListContainer;
