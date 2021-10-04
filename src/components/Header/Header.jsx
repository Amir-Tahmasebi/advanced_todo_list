import { useState, useRef, useEffect } from "react";
import {
  useFeatureDispatcher,
  useFeatureState,
} from "./../../context/feature-context";
import { todoAdded, todoUpdated, addText } from "./../../context/todosSlice";
export default function Header() {
  const [text, setText] = useState("");
  const dispatch = useFeatureDispatcher().todosDispatch;
  const { addedText } = useFeatureState().todosState;

  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);
  const handleChange = (e) => setText(e.target.value);
  const handleOnKeyDown = (e) => {
    const trimText = text.trim();

    if (e.nativeEvent.which === 13 && trimText) {
      if (addedText.text && addedText.id) {
        dispatch(todoUpdated(trimText, addedText.id));
        dispatch(addText(null, null));
        setText("");
      } else {
        dispatch(todoAdded(trimText));
        setText("");
      }
    }
  };
  return (
    <header className="todo-header">
      <input
        type="text"
        placeholder={
          addedText.text ? "ویرایش کنید ..." : "کار جدید خود را وارد کنید"
        }
        className="new-todo"
        onChange={handleChange}
        value={text}
        onKeyDown={handleOnKeyDown}
        ref={inputRef}
      />
    </header>
  );
}
