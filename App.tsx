import * as Font from "expo-font";
import { LinearGradient } from "expo-linear-gradient";
import React, { useCallback, useEffect, useState } from "react";
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

const App: React.FC = () => {
  const [fontLoaded, setFontLoaded] = useState(false);
  const [tasks, setTasks] = useState<ITask[]>(initialState);

  const loadFont = useCallback(async () => {
    await Font.loadAsync({
      nunito: require("./assets/fonts/Nunito-Regular.ttf"),
    });
    setFontLoaded(true);
  }, [setFontLoaded]);

  useEffect(() => {
    loadFont();
  }, []);

  return (
    fontLoaded && (
      <ThemeProvider theme={theme}>
        <SafeAreaView style={styles.container}>
          <LinearGradient
            start={[0.5, 0.85]}
            colors={gradientColors}
            style={styles.gradient}
          >
            <View style={styles.todo}>
              <Todo tasks={tasks} setTasks={setTasks} />
            </View>
          </LinearGradient>
        </SafeAreaView>
      </ThemeProvider>
    )
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

export default App;
