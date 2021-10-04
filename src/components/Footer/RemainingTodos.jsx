import { useFeatureState } from "./../../context/feature-context";
export default function RemainingTodos() {
  const todos = Object.values(useFeatureState().todosState.todos);
  const todoFilter = todos.filter((todo) => {
    if (todo.completed === false) {
      return todo;
    }
    return null;
  });

  const count = todoFilter.length;
  return (
    <section className="remaining-todos">
      <h5>کارهای باقیمانده</h5>
      <p>{count} مورد</p>
    </section>
  );
}
