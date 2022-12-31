import { createSlice, nanoid } from '@reduxjs/toolkit';

export const task = createSlice({
  name: 'tasks',
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      const newTask = {
        id: nanoid(),
        name: action.payload.task,
      };
      state.push(newTask);
    },
    deleteTask: (state, action) => {
      return state.filter(item => item.id !== action.payload.id);
    },
  },
});

export const { addTask, deleteTask } = task.actions;

export default task.reducer;
