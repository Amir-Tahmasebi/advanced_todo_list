import { useFeatureDispatcher } from "../../context/feature-context";
import { allCompleted, clearCompleted } from "../../context/todosSlice";

export default function Actions() {
  const dispatch = useFeatureDispatcher().todosDispatch;
  const handleAllCompleted = () => dispatch(allCompleted());
  const handleClearCompleted = () => dispatch(clearCompleted());

  return (
    <div className="actions">
      <h5>انتخاب کردن همه</h5>
      <button className="button" onClick={handleAllCompleted}>
        تکمیل کردن همه
      </button>
      <button className="button" onClick={handleClearCompleted}>
        {" "}
        پاک کردن همه تکمیل شده ها
      </button>
    </div>
  );
}
