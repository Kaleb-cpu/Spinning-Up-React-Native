/**
 * My To Do List App
 *
 * @format
 */

import React from "react";
import {
  SafeAreaView
} from "react-native";
import ToDoForm from "@/components/ToDoForm.js";
import ToDoList from "@/components/ToDoList.js";
function App() {
  return <SafeAreaView>
    <ToDoList />
    <ToDoForm />

  </SafeAreaView>;
}



export default App;
