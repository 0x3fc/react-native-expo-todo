import * as SQLite from "expo-sqlite";
import { useCallback, useEffect, useState } from "react";
import { ITask, Task } from "../models/Task";

(window as any).Expo = Object.freeze({ ...(window as any).Expo, SQLite });

const getInitialTasks = async (
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>
) => setTasks(await Task.find({ order: { createdAt: "DESC" } }));

export const useTask = () => {
  const [tasks, setTasks] = useState<ITask[]>([]);

  useEffect(() => {
    getInitialTasks(setTasks);
  }, []);

  const pushNewTask = useCallback(
    async (name: string) => {
      const task = new Task();
      task.name = name;
      await task.save();
      setTasks([task, ...tasks]);
    },
    [setTasks, tasks]
  );

  const toggleTaskComplete = useCallback(
    async (id: string) => {
      const task = await Task.findOne(id);
      task.completed = !task.completed;
      await task.save();

      setTasks(
        tasks.map(task =>
          task.id === id ? { ...task, completed: !task.completed } : task
        )
      );
    },
    [setTasks, tasks]
  );

  return { tasks, pushNewTask, toggleTaskComplete };
};
