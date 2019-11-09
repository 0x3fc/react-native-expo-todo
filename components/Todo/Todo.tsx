import React from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-elements";
import TodoItem from "./TodoItem";

export interface ITask {
  id: string;
  name: string;
  completed: boolean;
}

interface IProps {
  tasks: ITask[];
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>;
}

const toggleTaskComplete = (id: string, tasks: ITask[]) =>
  tasks.map(task =>
    task.id === id ? { ...task, completed: !task.completed } : task
  );

const Todo: React.FC<IProps> = ({ tasks, setTasks }) => {
  return (
    <View>
      <View>
        <Text h1>Today</Text>
      </View>
      {tasks.map(task => (
        <TodoItem
          key={task.id}
          task={task}
          onPress={() => setTasks(toggleTaskComplete(task.id, tasks))}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({});

export default Todo;
