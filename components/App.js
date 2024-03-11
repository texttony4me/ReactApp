// components/App.js
import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, changeTaskStatus } from '../redux/actions';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

const App = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  const [taskToEdit, setTaskToEdit] = useState(null);

  const handleEdit = (task) => {
    setTaskToEdit(task);
  };

  const handleDelete = (taskId) => {
    dispatch(deleteTask(taskId));
  };

  const handleChangeStatus = (taskId, status) => {
    dispatch(changeTaskStatus(taskId, status));
  };

  const handleCancelEdit = () => {
    setTaskToEdit(null);
  };

  return (
    <View>
      <Text>Todo App with React Native and Redux</Text>
      <TodoForm taskToEdit={taskToEdit} />
      {taskToEdit && (
        <Button title="Cancel Edit" onPress={handleCancelEdit} />
      )}
      <TodoList
        tasks={tasks}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onChangeStatus={handleChangeStatus}
      />
    </View>
  );
};

export default App;
