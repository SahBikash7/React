// todoSlice , the Slice at the end of todo is just a naming convention of our redux toolkit.

// nanoid generates unique id
import { createSlice, nanoid } from "@reduxjs/toolkit";

// Initial State of the store means how the store will present itself at the beginning.

const initialState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "MyTodo",
  initialState,
  //reducers consist of properties and functions
  reducers: {
    // state and action are accessible to us.
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
        completed: false,
      };
      state.todos.push(todo);
    },

    updateTodo: (state, action) => {
      const { id, text } = action.payload;
      state.todos = state.todos.map((todo) =>
        todo.id === id ? { ...todo, text } : todo
      );
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter(
        (eachTodo) => eachTodo.id !== action.payload
      );
    },
    toggleComplete: (state, action) => {
      state.todos = state.todos.map((eachTodo) =>
        eachTodo.id === action.payload
          ? { ...eachTodo, completed: !eachTodo.completed }
          : eachTodo
      );
    },
    loadTodo: (state, action) => {
      state.todos = action.payload;
    },
  },
});

export const { addTodo, removeTodo, updateTodo, toggleComplete, loadTodo } =
  todoSlice.actions;

export default todoSlice.reducer;
