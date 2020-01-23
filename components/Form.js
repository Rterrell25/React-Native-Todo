import React, { useState } from "react";
import { TextInput, StyleSheet } from "react-native";

export default () => {
  const [description, setDescription] = useState("");
  return (
    <TextInput
      style={styles.textInput}
      onChangeText={text => setDescription(text)}
      value={description}
    />
  );
};

const styles = StyleSheet.create({
  textInput: {
    width: "100%",
    borderColor: "gray",
    borderWidth: 1,
    padding: 10,
    marginVertical: 10,
    backgroundColor: "white"
  }
});
