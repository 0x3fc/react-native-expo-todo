import React, { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Text } from "react-native-elements";
import { useTask } from "../../hooks/useTask";
import NewTodo from "./NewTodo";
import TodoItem from "./TodoItem";

const Todo: React.FC = () => {
  const { tasks, pushNewTask, toggleTaskComplete, removeTask } = useTask();
  const [scrollEnabled, setScrollEnabled] = useState(false);

  return (
    <View style={styles.todo}>
      <View>
        <Text h1>Todo</Text>
      </View>
      <View>
        <NewTodo onSubmitEditing={pushNewTask} />
      </View>
      <View style={styles.scroll}>
        <ScrollView scrollEnabled={scrollEnabled}>
          {tasks.map(task => (
            <TodoItem
              key={task.id}
              task={task}
              onPress={() => toggleTaskComplete(task.id)}
              setScrollEnabled={setScrollEnabled}
              removeTask={removeTask}
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
