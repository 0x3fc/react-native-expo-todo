import React, { useState } from "react";
import { StyleSheet, TextInput } from "react-native";

interface IProps {
  onSubmitEditing: (name: string) => void;
}

const NewTodo: React.FC<IProps> = ({ onSubmitEditing }) => {
  const [text, setText] = useState("");
  return (
    <TextInput
      style={styles.input}
      value={text}
      onChangeText={t => setText(t)}
      enablesReturnKeyAutomatically
      onSubmitEditing={() => {
        onSubmitEditing(text);
        setText("");
      }}
      placeholder="Enter a new task..."
    />
  );
};

const styles = StyleSheet.create({
  input: {
    marginHorizontal: 20,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 16,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    elevation: 3,
    backgroundColor: "#f9f9f9",
    height: 48,
    fontSize: 16,
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
});

export default NewTodo;
