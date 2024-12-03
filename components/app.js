/**
 * My To Do List App
 *
 * @format
 */

import React, { useState } from "react";
import { SafeAreaView } from "react-native";
import ToDoList from "./ToDoList";
import ToDoForm from "./ToDoForm";

function App() {
  const [tasks, setTasks] = useState(["Do laundry", "Go to gym", "Walk dog"]);

  const [newTask, setNewTask] = useState(""); // State to hold the new task input

  const addTask = (taskText) => {
    setTasks([...tasks, taskText]);
  };

  return (
    <SafeAreaView>
      {/* Step 2: Pass tasks as a prop to ToDoList */}
      <ToDoList tasks={tasks} />
      <ToDoForm addTask={addTask} />
    </SafeAreaView>
  );
}

export default App;
