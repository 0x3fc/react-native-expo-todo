import React from "react";
import { StyleSheet, View } from "react-native";
import { CheckBox } from "react-native-elements";
import { ITask } from "./Todo";

interface IProps {
  task: ITask;
  onPress: () => void;
}

const TodoItem: React.FC<IProps> = ({ task, onPress }) => {
  return (
    <View>
      <CheckBox
        title={task.name}
        checked={task.completed}
        textStyle={task.completed ? styles.completed : styles.incomplete}
        containerStyle={styles.containerStyle}
        onPress={onPress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  completed: {
    color: "#aaa",
    textDecorationLine: "line-through",
  },
  incomplete: {},
  containerStyle: {
    borderWidth: 0,
    backgroundColor: "transparent",
  },
});

export default TodoItem;
