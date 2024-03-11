import React from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet } from 'react-native';

const Task = ({ task, onEdit, onDelete, onUpdateStatus }) => {
  const borderColor = {
    due: 'yellow',
    done: 'green',
    late: 'red',
  }[task.status];

  return (
    <View style={[styles.taskContainer, { borderColor }]}>
      <Text style={styles.taskTitle}>{task.title}</Text>
      <Text style={styles.taskStatus}>Status: {task.status}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => onEdit(task)}>
          <Text style={styles.buttonText}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => onDelete(task.id)}>
          <Text style={styles.buttonText}>X</Text>
        </TouchableOpacity>
        <Button
          title="Due"
          onPress={() => onUpdateStatus(task.id, 'due')}
          disabled={task.status === 'due'}
          color="yellow"
        />
        <Button
          title="Done"
          onPress={() => onUpdateStatus(task.id, 'done')}
          disabled={task.status === 'done'}
          color="green"
        />
        <Button
          title="Late"
          onPress={() => onUpdateStatus(task.id, 'late')}
          disabled={task.status === 'late'}
          color="red"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  taskContainer: {
    borderWidth: 2,
    padding: 10,
    margin: 10,
    borderRadius: 8,
  },
  taskTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  taskStatus: {
    fontStyle: 'italic',
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    padding: 5,
    backgroundColor: 'lightgray',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
  },
});

export default Task;
