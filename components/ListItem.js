import React, { useContext } from "react";
import { Text, View, Button, StyleSheet } from "react-native";
import { TasksContext } from "../context/TasksContext";

export default props => {
  const { flipTask, deleteTask } = useContext(TasksContext);
  return (
    <View style={styles.listItem}>
      <View style={styles.textWrapper}>
        <Text style={[props.completed && styles.completed]}>
          {props.description}
        </Text>
      </View>
      <View style={styles.buttonsWrapper}>
        <Button
          title={props.completed ? "✅" : "🔲"}
          color="white"
          onPress={() => flipTask(props.id)}
        />
        <Button title="❌" color="white" onPress={() => deleteTask(props.id)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10,
    paddingHorizontal: 10
  },
  textWrapper: {
    width: "80%",
    justifyContent: "center"
  },
  completed: {
    textDecorationLine: "line-through"
  },
  buttonsWrapper: {
    flexDirection: "row",
    justifyContent: "space-between"
  }
});
