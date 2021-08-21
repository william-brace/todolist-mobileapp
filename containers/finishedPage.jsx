/** @format */

import React from "react";
import { View } from "react-native";
import ListContainer from "../components/ListContainer";
import Header from "../components/Header";
import styles from "../styles";

const FinishedPage = ({ tasks, setTasks, focus, setFocus }) => {
  return (
    <View>
      <Header headerText="Finished Tasks" />
      <ListContainer
        tasks={tasks}
        setTasks={setTasks}
        showCompleted={true}
        focus={focus}
        setFocus={setFocus}
      />
    </View>
  );
};

export default FinishedPage;
