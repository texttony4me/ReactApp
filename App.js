import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import store from './redux/store';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';

const App = () => {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>ToDo App with React Native and Redux</Text>
        </View>
        <View style={styles.content}>
          <AddTask />
          <TaskList />
        </View>
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 50
  },
  headerText: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: "center"
  },
  content: {
    flex: 1,
  },
});

export default App;
