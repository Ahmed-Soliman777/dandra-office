import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./features/filterSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      filter: filterReducer,
    },
  });
};

// store infer
export type AppStore = ReturnType<typeof makeStore>;

// dispatch infer
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
