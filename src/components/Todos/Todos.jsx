import TodoItem from "./TodoItem.jsx";
import { useFeatureState } from "./../../context/feature-context";
import { selectFilterdTodoIds } from "../../context/todosSlice.js";

export default function Todos() {
  const todos = selectFilterdTodoIds(useFeatureState());
  const renderTodoItem = Object.values(todos).map((todo) => (
    <TodoItem key={todo.id} todo={todo} />
  ));

  return <ul className="todos-list">{renderTodoItem}</ul>;
}
