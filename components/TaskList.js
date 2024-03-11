import React from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import Task from './Task';
import firebase from '../firebase';
import { deleteTask, editTask, updateTaskStatus } from '../redux/actions';


/*
const TaskList = ({ tasks, onEdit, onDelete, onUpdateStatus }) => {
  return (
    <FlatList
      data={tasks}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <Task
          task={item}
          onEdit={onEdit}
          onDelete={onDelete}
          onUpdateStatus={onUpdateStatus}
        />
      )}
    />
  );
};

const mapStateToProps = (state) => ({
  tasks: state.tasks,
});

export default connect(mapStateToProps)(TaskList);
*/

const TaskList = ({ tasks, dispatch }) => {
  const handleEdit = (task) => {
   
    dispatch(editTask(task));
  };

  const handleDelete = (taskId) => {
    firebase.database().ref(`tasks/${taskId}`).remove();
    dispatch(deleteTask(taskId));
  };

  const handleUpdateStatus = (taskId, status) => {
   
    dispatch(updateTaskStatus(taskId, status));
  };

  return (
    <FlatList
      data={tasks}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <Task
          task={item}
          onEdit={handleEdit}
          onDelete={handleDelete}
          onUpdateStatus={handleUpdateStatus}
        />
      )}
    />
  );
};

const mapStateToProps = (state) => ({
  tasks: state.tasks,
});

export default connect(mapStateToProps)(TaskList);
