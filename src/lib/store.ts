import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./features/filterSlice";
import uiReducer from "./features/uiSlice"
import usersReducer from "./features/userSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      filter: filterReducer,
      ui: uiReducer,
      users: usersReducer,
    },
  });
};

// store infer
export type AppStore = ReturnType<typeof makeStore>;

// dispatch infer
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
