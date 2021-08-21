/** @format */

import { StyleSheet } from "react-native";

export default StyleSheet.create({
  padding: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  margin: {
    marginTop: 10,
    marginBottom: 20,
  },
  marginBottom: {
    paddingBottom: 60,
  },
  pink: {
    backgroundColor: "pink",
  },
  taskCard: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 7,
    marginBottom: 7,
    padding: 20,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 10,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  taskFont: {
    fontSize: 20,
  },
  maxHeight: {
    flex: 1,
  },
});
