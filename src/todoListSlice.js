import { createSlice } from "@reduxjs/toolkit";

let id = 1;

const todoListSlice = createSlice({
  name: "todoList",
  initialState: [],
  reducers: {
    addTodo(state, action) {
      const { name } = action.payload;
      state.push({ id: id++, name });
    },

    removeTodo(state, action) {
      const { id } = action.payload;
      return state.filter((todo) => todo.id !== id);
    },

    updateTodo(state, action) {
      const { id, name } = action.payload;
      const todo = state.find((todo) => todo.id === id);
      if (todo) {
        todo.name = name;
      }
    },
  },

  selectors: {
    getTodo(state, id) {
      return state.find((todo) => todo.id === id);
    },
  },
});

export const { addTodo, removeTodo, updateTodo } =
  todoListSlice.actions;

export const { getTodo } = todoListSlice.selectors;

export default todoListSlice.reducer;