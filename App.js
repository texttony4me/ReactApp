import React, { useState, useEffect } from "react";
import {
  View, Text, TextInput, Button, FlatList, SafeAreaView, StyleSheet,} from "react-native";
  import { db } from "./src/firebase";

  export default function App() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");
    const [taskDescription, setTaskDescription] = useState("");
  
    useEffect(() => {
      const tasksRef = db.ref("tasks");
      const listener = tasksRef.on("value", (snapshot) => {
        const tasksData = snapshot.val();
        if (tasksData) {
          const tasksArray = Object.keys(tasksData).map((key) => ({
            id: key,
            text: tasksData[key].text,
            description: tasksData[key].description,
          }));
          setTasks(tasksArray);
        } else {
          setTasks([]);
        }
      });
  
      return () => {
        tasksRef.off("value", listener);
      };
    }, []);
  
    const handleAddTask = () => {
      const tasksRef = db.ref("tasks");
      tasksRef.push({ text: newTask, description: taskDescription });
      setNewTask("");
      setTaskDescription("");
    };
  
    const handleDeleteTask = (taskId) => {
      const taskRef = db.ref(`tasks/${taskId}`);
      taskRef.remove();
    };
  
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.header}>Task List</Text>
        <Text style={styles.header}>By Anthony Nwabueze</Text>
        <FlatList
          data={tasks}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.taskItem}>
              <Text>{item.text}</Text>
              {item.description && <Text>Description: {item.description}</Text>}
              <Button title="Delete" onPress={() => handleDeleteTask(item.id)} />
            </View>
          )}
        />
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Task"
            value={newTask}
            onChangeText={(text) => setNewTask(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Description"
            value={taskDescription}
            onChangeText={(text) => setTaskDescription(text)}
          />
          <Button title="Add Task" onPress={handleAddTask} />
        </View>
      </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      margin: 16,
    },
    header: {
      fontSize: 24,
      fontWeight: "bold",
      marginBottom: 16,
    },
    taskItem: {
      marginBottom: 16,
      borderWidth: 1,
      borderColor: "#ccc",
      padding: 8,
      borderRadius: 8,
    },
    inputContainer: {
      marginTop: 16,
    },
    input: {
      height: 40,
      borderColor: "#ccc",
      borderWidth: 1,
      marginBottom: 8,
      paddingHorizontal: 8,
    },
  });