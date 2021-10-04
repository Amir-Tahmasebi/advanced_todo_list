import Actions from "./Actions.jsx";
import FilterColor from "./FilterColor.jsx";
import FilterStatus from "./FilterStatus.jsx";
import RemainingTodos from "./RemainingTodos.jsx";

export default function Footer() {
  return (
    <footer className="footer-todos">
      <FilterColor />
      <FilterStatus />
      <RemainingTodos count={3} />
      <Actions />
    </footer>
  );
}
