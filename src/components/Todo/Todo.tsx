import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Text } from "react-native-elements";
import NewTodo from "./NewTodo";
import TodoItem from "./TodoItem";

export interface ITask {
  id: string;
  name: string;
  completed: boolean;
}

interface IProps {
  tasks: ITask[];
  pushNewTask: (name: string) => void;
  toggleTaskComplete: (id: string) => void;
}

const Todo: React.FC<IProps> = ({ tasks, pushNewTask, toggleTaskComplete }) => {
  return (
    <View style={styles.todo}>
      <View>
        <Text h1>Today</Text>
      </View>
      <View>
        <NewTodo onSubmitEditing={pushNewTask} />
      </View>
      <View style={styles.scroll}>
        <ScrollView>
          {tasks.map(task => (
            <TodoItem
              key={task.id}
              task={task}
              onPress={() => toggleTaskComplete(task.id)}
            />
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  todo: { flex: 1 },
  scroll: { flex: 1 },
});

export default Todo;
