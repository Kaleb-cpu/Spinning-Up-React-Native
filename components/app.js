/**
 * My To Do List App
 *
 * @format
 */

import React, { useState } from "react";
import { SafeAreaView } from "react-native";
import ToDoList from "@/components/ToDoList.js";

function App() {

  const [tasks, setTasks] = useState([
    'Do laundry',
    'Go to gym',
    'Walk dog'
  ]);

  return (
    <SafeAreaView>
      {/* Step 2: Pass tasks as a prop to ToDoList */}
      <ToDoList tasks={tasks} />
    </SafeAreaView>
  );
}

export default App;
