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
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>;
}

const toggleTaskComplete = (id: string, tasks: ITask[]) =>
  tasks.map(task =>
    task.id === id ? { ...task, completed: !task.completed } : task
  );

const pushIncompletedTask = (name: string, tasks: ITask[]): ITask[] => [
  { id: Math.random().toString(), name, completed: false },
  ...tasks,
];

const Todo: React.FC<IProps> = ({ tasks, setTasks }) => {
  return (
    <View style={styles.todo}>
      <View>
        <Text h1>Today</Text>
      </View>
      <View>
        <NewTodo
          onSubmitEditing={(name: string) =>
            setTasks(pushIncompletedTask(name, tasks))
          }
        />
      </View>
      <View style={styles.scroll}>
        <ScrollView>
          {tasks.map(task => (
            <TodoItem
              key={task.id}
              task={task}
              onPress={() => setTasks(toggleTaskComplete(task.id, tasks))}
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
