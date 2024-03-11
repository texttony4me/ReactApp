export const addTask = (task) => ({
  type: 'ADD_TASK',
  payload: task,
});

export const editTask = (task) => ({
  type: 'EDIT_TASK',
  payload: task,
});

export const deleteTask = (taskId) => ({
  type: 'DELETE_TASK',
  payload: taskId,
});

export const updateTaskStatus = (taskId, status) => ({
  type: 'UPDATE_TASK_STATUS',
  payload: { taskId, status },
});
