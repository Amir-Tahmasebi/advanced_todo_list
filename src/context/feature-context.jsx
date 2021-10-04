import { createContext, useContext, useReducer } from "react";
import { initState as todosInitState, todosReducer } from "./todosSlice";
import { initState as filtersInitState, filtersReducer } from "./filterSlice";

const FeatureStateContext = createContext();
const FeatureDispatcherContext = createContext();

export function useFeatureState() {
  const context = useContext(FeatureStateContext);
  if (!context) {
    throw Error("useFeatureState must be used with a FeatureProvider");
  }
  return context;
}

export function useFeatureDispatcher() {
  const context = useContext(FeatureDispatcherContext);
  if (!context) {
    throw Error("useFeatureState must be used with a FeatureProvider");
  }
  return context;
}

export function FeatureProvider({ children }) {
  const [todosState, todosDispatch] = useReducer(todosReducer, todosInitState);
  const [filtersState, filtersDispatch] = useReducer(
    filtersReducer,
    filtersInitState
  );
  return (
    <FeatureStateContext.Provider value={{ todosState, filtersState }}>
      <FeatureDispatcherContext.Provider
        value={{ todosDispatch, filtersDispatch }}
      >
        {children}
      </FeatureDispatcherContext.Provider>
    </FeatureStateContext.Provider>
  );
}
