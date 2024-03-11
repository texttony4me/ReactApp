import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';
import { connect } from 'react-redux';
import firebase from '../firebase';
import { addTask } from '../redux/actions';

const AddTask = ({ dispatch }) => {
  const [taskTitle, setTaskTitle] = useState('');

  const handleAddTask = () => {
    if (taskTitle) {
      const newTask = {
        id: new Date().getTime(),
        title: taskTitle,
        status: 'due',
      };
      

     
      firebase.database().ref('tasks').push(newTask);
      dispatch(addTask(newTask));
      setTaskTitle('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Add ToDo Here</Text>
      <TextInput
        style={styles.input}
        placeholder="Task"
        value={taskTitle}
        onChangeText={(text) => setTaskTitle(text)}
      />
      <Button
        title="ADD TASK"
        onPress={handleAddTask}
        disabled={!taskTitle}
        color="blue"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f0f0f0',
    marginBottom: 20,
  },
  label: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default connect()(AddTask);
