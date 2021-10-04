import {
  useFeatureState,
  useFeatureDispatcher,
} from "../../context/feature-context";
import {
  StatusFilters,
  changedStatusFilter,
} from "./../../context/filterSlice";

export default function FilterStatus() {
  const { status } = useFeatureState().filtersState;
  const dispatch = useFeatureDispatcher().filtersDispatch;
  const handleChangeStatus = (status) => dispatch(changedStatusFilter(status));
  const renderButton = Object.keys(StatusFilters).map((key) => {
    const value = StatusFilters[key];
    const className = value === status ? "active" : null;
    return (
      <button
        key={key}
        className={className}
        onClick={() => handleChangeStatus(value)}
      >
        {value}
      </button>
    );
  });
  return (
    <section className="filter-status">
      <h5>فیلتر بر اساس وضعیت</h5>
      {renderButton}
    </section>
  );
}
