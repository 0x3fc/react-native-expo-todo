import React from "react";
import { StyleSheet } from "react-native";
import { Button, CheckBox } from "react-native-elements";
import Swipeable from "react-native-swipeable";
import { ITask } from "../../models/Task";

interface IProps {
  task: ITask;
  onPress: () => void;
  setScrollEnabled: React.Dispatch<React.SetStateAction<boolean>>;
  removeTask: (id: string) => Promise<void>;
}

const TodoItem: React.FC<IProps> = ({
  task,
  onPress,
  setScrollEnabled,
  removeTask,
}) => {
  const rightContent = <Button title="Delete" buttonStyle={styles.delete} />;

  return (
    <Swipeable
      rightContent={rightContent}
      onSwipeStart={() => setScrollEnabled(false)}
      onSwipeRelease={() => setScrollEnabled(true)}
      onRightActionRelease={() => removeTask(task.id)}
    >
      <CheckBox
        title={task.name}
        checked={task.completed}
        textStyle={task.completed ? styles.completed : styles.incomplete}
        containerStyle={styles.containerStyle}
        onPress={onPress}
      />
    </Swipeable>
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
  delete: {
    backgroundColor: "red",
  },
});

export default TodoItem;
