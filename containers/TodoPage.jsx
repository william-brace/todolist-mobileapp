/** @format */

import React from "react";
import { View, Text } from "react-native";
import Header from "../components/Header";
import ListContainer from "../components/ListContainer";
import styles from "../styles";

const TodoPage = ({ tasks, setTasks, focus, setFocus }) => {
  return (
    <React.Fragment>
      <View style={styles.maxHeight}>
        <Header
          headerText="TODO Tasks"
          add={true}
          setTasks={setTasks}
          tasks={tasks}
          focus={focus}
          setFocus={setFocus}
        />
        <ListContainer
          tasks={tasks}
          setTasks={setTasks}
          showCompleted={false}
          focus={focus}
          setFocus={setFocus}
        />
      </View>
    </React.Fragment>
  );
};

export default TodoPage;
