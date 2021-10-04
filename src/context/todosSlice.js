/* eslint-disable default-case */
import produce from "immer";
import { v4 as uuid } from "uuid";
import { StatusFilters } from "./filterSlice";

export const initState = {
  todos: {
    1: { id: 1, text: "ورزش کردن", completed: true, color: "blue" },
    2: { id: 2, text: "مطالعه کردن", completed: false },
  },
  addedText: {
    text: null,
    id: null,
  },
};

const actionTypes = {
  TODOS_TODO_ADDED: "todos/todoAdded",
  TODOS_TODO_TOGGLED: "todos/todoToggled",
  TODOS_TODO_DELETED: "todos/todoDeleted",
  TODOS_TODO_UPDATED: "todos/todoUpdated",
  TODOS_TODO_CHANGED_COLOR: "todos/todoChangedColor",
  TODOS_ADDED_TEXT: "todos/addedText",
  TODOS_ALL_COMPLETED: "todos/allCompleted",
  TODOS_CLEAR_COMPLETED: "todos/clearCompleted",
};

export const todosReducer = produce((state, action) => {
  switch (action.type) {
    case actionTypes.TODOS_TODO_ADDED:
      const todo = action.payload;
      state.todos[todo.id] = todo;
      break;
    case actionTypes.TODOS_TODO_TOGGLED:
      const todoToggledId = action.payload;
      state.todos[todoToggledId].completed =
        !state.todos[todoToggledId].completed;
      break;
    case actionTypes.TODOS_TODO_DELETED:
      const todoDeletedId = action.payload;
      delete state.todos[todoDeletedId];
      break;
    case actionTypes.TODOS_ADDED_TEXT:
      state.addedText = action.payload;
      break;
    case actionTypes.TODOS_TODO_UPDATED:
      const { updatedText, updatedId } = action.payload;
      state.todos[updatedId].text = updatedText;
      break;
    case actionTypes.TODOS_TODO_CHANGED_COLOR:
      const { id, color } = action.payload;
      state.todos[id].color = color;
      break;
    case actionTypes.TODOS_ALL_COMPLETED:
      Object.values(state.todos).map((todo) => (todo.completed = true));
      break;
    case actionTypes.TODOS_CLEAR_COMPLETED:
      Object.values(state.todos).forEach((todo) => {
        if (todo.completed) {
          delete state.todos[todo.id];
        }
      });
  }
}, initState);

export const todoAdded = (text) => ({
  type: actionTypes.TODOS_TODO_ADDED,
  payload: { text, id: uuid(), completed: false },
});

export const todoToggled = (id) => ({
  type: actionTypes.TODOS_TODO_TOGGLED,
  payload: id,
});

export const todoDeleted = (id) => ({
  type: actionTypes.TODOS_TODO_DELETED,
  payload: id,
});

export const todoUpdated = (updatedText, updatedId) => ({
  type: actionTypes.TODOS_TODO_UPDATED,
  payload: { updatedText, updatedId },
});

export const todoChangedColor = (color, id) => ({
  type: actionTypes.TODOS_TODO_CHANGED_COLOR,
  payload: { color, id },
});
export const addText = (text, id) => ({
  type: actionTypes.TODOS_ADDED_TEXT,
  payload: { text, id },
});
export const allCompleted = () => ({ type: actionTypes.TODOS_ALL_COMPLETED });
export const clearCompleted = () => ({
  type: actionTypes.TODOS_CLEAR_COMPLETED,
});

const selectFilterdTodos = (state) => {
  const todos = Object.values(state.todosState.todos);
  const { colors, status } = state.filtersState;
  const showAll = status === StatusFilters.All;

  if (showAll && colors.length === 0) {
    return todos;
  }
  const showCompleted = status === StatusFilters.Completed;
  return todos.filter((todo) => {
    const statusFilter = showAll || todo.completed === showCompleted;
    const colorsFilter = colors.length === 0 || colors.includes(todo.color);
    return statusFilter && colorsFilter;
  });
};

export const selectFilterdTodoIds = (state) => {
  const filterdTodos = selectFilterdTodos(state);
  return filterdTodos.map((todo) => todo);
};
