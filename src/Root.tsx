import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { Theme, ThemeProvider } from "react-native-elements";
import Todo from "./components/Todo/Todo";
import { useTask } from "./hooks/useTask";

const theme: Theme = {
  colors: {
    primary: "#6d46f3",
  },
  Text: {
    h1Style: {
      fontSize: 30,
      marginVertical: 20,
      marginHorizontal: 15,
      letterSpacing: 1,
      fontFamily: "nunito",
    },
    style: {
      fontFamily: "nunito",
    },
  },
};

const gradientColors = ["transparent", "rgba(0, 0, 0, 0.1)"];

const Root: React.FC = () => {
  const { tasks, pushNewTask, toggleTaskComplete } = useTask();

  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView style={styles.container}>
        <LinearGradient
          start={[0.5, 0.85]}
          colors={gradientColors}
          style={styles.gradient}
        >
          <View style={styles.todo}>
            <Todo
              tasks={tasks}
              pushNewTask={pushNewTask}
              toggleTaskComplete={toggleTaskComplete}
            />
          </View>
        </LinearGradient>
      </SafeAreaView>
    </ThemeProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
  },
  gradient: {
    flex: 1,
  },
  todo: {
    marginTop: 20,
    flex: 1,
  },
});

export default Root;
