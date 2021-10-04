import { FormControlLabel } from "@material-ui/core";
import { Checkbox } from "@material-ui/core";
import {
  useFeatureDispatcher,
  useFeatureState,
} from "../../context/feature-context";
import { changedColorFilter } from "../../context/filterSlice";
import { availableColors } from "../Todos/TodoItem";

export default function FilterColor() {
  const { colors } = useFeatureState().filtersState;
  const dispatch = useFeatureDispatcher().filtersDispatch;
  const handleChangeColor = (color, changeType) => {
    dispatch(changedColorFilter(color, changeType));
  };
  const renderColor = availableColors.map((c) => {
    const checked = colors.includes(c.en);
    const changeType = checked ? "removed" : "added";
    return (
      <div key={c.en}>
        <FormControlLabel
          name="blue"
          control={
            <Checkbox
              onChange={(e) => handleChangeColor(e.target.value, changeType)}
              name={c.en}
              color="primary"
              value={c.en}
            />
          }
          label={c.fa}
        />
        <div className={`color-box ${c.en}`}></div>
      </div>
    );
  });
  return (
    <section className="filter-colors">
      <h5>فیلتر بر اساس رنگ</h5>
      <section className="color-container">{renderColor}</section>
    </section>
  );
}
