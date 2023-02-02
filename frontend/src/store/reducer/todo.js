import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  total: 0,
  todo: null,
  todos: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    gettodos: (state, action) => {
      return {
        ...state,
        todos: action.payload.data,
        total: action.payload.total,
      };
    },
    gettodo: (state, action) => {
      return {
        ...state,
        post: action.payload.data,
      };
    },

    createtodo: (state, action) => {
      return {
        ...state,
        total: state.total + 1,

        todo: action.payload.data,
        todos: [action.payload.data, ...state.todos],
      };
    },
    deletetodo: (state, action) => {
      return {
        ...state,
        total: state.total - 1,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    },
    updatetodo: (state, action) => {
      const todosList = [...state.todos];
      let index = todosList.findIndex(
        (todo) => todo.id === action.payload.data.id
      );
      todosList[index] = action.payload.data;

      return {
        ...state,
        // student: action.payload.data,
        todos: todosList,
      };
    },
  },
});
export const {
  gettodos,
  createtodo,
  gettodo,
  deletetodo,
  updatetodo,
} = todoSlice.actions;
export default todoSlice;
