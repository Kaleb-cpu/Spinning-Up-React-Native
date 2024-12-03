/**
 * My To Do List App
 *
 * @format
 */

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';  // Now using the new HomeScreen
import AboutScreen from './screens/AboutScreen'; // AboutScreen component

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;


{/* <SafeAreaView>
      {/* Step 2: Pass tasks as a prop to ToDoList */}
      // <ToDoList tasks={tasks} />
      // <ToDoForm addTask={addTask} />
    // </SafeAreaView> */}
