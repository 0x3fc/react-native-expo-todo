import * as Font from "expo-font";
import React, { useEffect, useState } from "react";
import "reflect-metadata";
import { createConnection } from "typeorm";
import { Task } from "./src/models/Task";
import Root from "./src/Root";

const App: React.FC = () => {
  const [loaded, setLoaded] = useState(false);

  const load = async () => {
    await createConnection({
      type: "expo",
      database: "todo",
      synchronize: true,
      entities: [Task],
    });
    await Font.loadAsync({
      nunito: require("./assets/fonts/Nunito-Regular.ttf"),
    });
    setLoaded(true);
  };

  useEffect(() => {
    load();
  }, []);

  return loaded && <Root />;
};

export default App;
