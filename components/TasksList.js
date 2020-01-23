import React, { useContext } from "react";
import { FlatList, Text, View, StyleSheet } from "react-native";
import { TasksContext } from "../context/TasksContext";

export default () => {
  const { tasks } = useContext(TasksContext);
  return (
    <View style={styles.wrapper}>
      <FlatList
        data={tasks}
        renderItem={({ item }) => <Text>{item.description}</Text>}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    height: "100%"
  },
  separator: {
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: "gray"
  }
});
