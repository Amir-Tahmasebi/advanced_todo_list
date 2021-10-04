/* eslint-disable default-case */
import produce from "immer";

export const StatusFilters = {
  All: "همه",
  Active: "فعال ها",
  Completed: "تکمیل شده ها",
};

export const initState = {
  status: StatusFilters.All,
  colors: [],
};

const actionTypes = {
  FILTERS_CHANGED_STATUS_FILTER: "filters/changedStatusFilter",
  FILTERS_CHANGED_COLOR_FILTER: "filters/changedColorFilter",
  ADDED: "added",
  REMOVED: "removed",
};

export const filtersReducer = produce((state, action) => {
  switch (action.type) {
    case actionTypes.FILTERS_CHANGED_STATUS_FILTER:
      state.status = action.payload;
      break;
    case actionTypes.FILTERS_CHANGED_COLOR_FILTER:
      const { colors } = state;
      const { color, changeType } = action.payload;
      switch (changeType) {
        case actionTypes.ADDED:
          state.colors.push(color);
          break;
        case actionTypes.REMOVED:
          state.colors = colors.filter((c) => c !== color);
          break;
      }
  }
}, initState);

export const changedStatusFilter = (status) => ({
  type: actionTypes.FILTERS_CHANGED_STATUS_FILTER,
  payload: status,
});

export const changedColorFilter = (color, changeType) => ({
  type: actionTypes.FILTERS_CHANGED_COLOR_FILTER,
  payload: { color, changeType },
});