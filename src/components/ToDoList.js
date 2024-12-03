import { View, Text, Pressable, ScrollView, StyleSheet } from "react-native";
import React from "react";

const ToDoList = ({ tasks }) => {
  return (
    <ScrollView>
      {tasks.map((task, index) => (
        <Pressable key={index}>
          <View style={styles.task}>
            <Text style={styles.taskText}>{task}</Text>
          </View>
        </Pressable>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    task: {
      padding: 10,
      borderBottomWidth: 1,
      borderColor: "#ccc",
    },
    completed: {
      backgroundColor: "#e0e0e0",
    },
    taskText: {
      fontSize: 16,
    }
  });

export default ToDoList;