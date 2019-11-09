import React, { useState } from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { Theme, ThemeProvider } from "react-native-elements";
import Todo, { ITask } from "./components/Todo/Todo";

const initialState: ITask[] = [
  { id: "uuid-1", name: "Complete todo app", completed: false },
  { id: "uuid-2", name: "Sleep", completed: false },
  { id: "uuid-3", name: "Study for midterm", completed: true },
];

const theme: Theme = {
  colors: {
    primary: "#6d46f3",
  },
};

const App: React.FC = () => {
  const [tasks, setTasks] = useState<ITask[]>(initialState);

  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView style={styles.container}>
        <View style={styles.todo}>
          <Todo tasks={tasks} setTasks={setTasks} />
        </View>
      </SafeAreaView>
    </ThemeProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
  },
  todo: {
    marginTop: 20,
  },
});

export default App;
