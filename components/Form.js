import React, { useState } from "react";
import { TextInput, View, Text, StyleSheet } from "react-native";

export default () => {
  const [description, setDescription] = useState("");
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>My Tasks</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={text => setDescription(text)}
        value={description}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "whitesmoke",
    padding: 10,
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    borderTopColor: "gray",
    borderTopWidth: 1
  },
  headerText: {
    fontSize: 30,
    marginTop: 20
  },
  textInput: {
    width: "100%",
    borderColor: "gray",
    borderWidth: 1,
    padding: 10,
    marginVertical: 10,
    backgroundColor: "white"
  }
});
