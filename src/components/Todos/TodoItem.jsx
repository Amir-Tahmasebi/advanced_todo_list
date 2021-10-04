import { useFeatureDispatcher } from "./../../context/feature-context";
import {
  todoToggled,
  todoDeleted,
  todoChangedColor,
  addText,
} from "./../../context/todosSlice";
import {
  FormControlLabel,
  Checkbox,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";

export const availableColors = [
  { en: "green", fa: "سبز" },
  { en: "blue", fa: "آبی" },
  { en: "orange", fa: "نارنجی" },
  { en: "yellow", fa: "زرد" },
  { en: "purple", fa: "بنفش" },
  { en: "red", fa: "قرمز" },
];

export default function TodoItem({ todo }) {
  const { id, completed, text, color } = todo;
  const dispatch = useFeatureDispatcher().todosDispatch;
  const optionColor = availableColors.map((c, index) => {
    return (
      <MenuItem value={c.en} key={index} style={{ color: c.en }}>
        {c.fa}
      </MenuItem>
    );
  });
  const handleChangeToggle = () => dispatch(todoToggled(id));
  const handleDeleteTodo = () => dispatch(todoDeleted(id));
  const handleUpdateTodo = () => dispatch(addText(text, id));
  const handleChangeColor = (e) => {
    const color = e.target.value;
    dispatch(todoChangedColor(color, id));
  };
  return (
    <li>
      <FormControlLabel
        className="checkbox-container"
        control={
          <Checkbox
            checked={completed}
            onChange={handleChangeToggle}
            color="primary"
            className="checkbox"
          />
        }
      />
      <p className={completed ? 'completed-text' : null}>{text}</p>
      <section className="container-option">
        <button className="delete-todo" onClick={handleDeleteTodo}>
          حذف
        </button>
        <button className="edit-todo" onClick={handleUpdateTodo}>
          ویرایش
        </button>
        <FormControl className="select-box-color">
          <InputLabel style={{ color }}>رنگ</InputLabel>
          <Select value={color} style={{ color }} onChange={handleChangeColor}>
            {optionColor}
          </Select>
        </FormControl>
      </section>
    </li>
  );
}
