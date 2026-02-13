import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FilterState {
  minPrice: number;
  maxPrice: number;
}

const initialState: FilterState = {
  minPrice: 0,
  maxPrice: 2000,
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setMinPrice: (state, action: PayloadAction<number>) => {
      state.minPrice = action.payload;
    },
    setMaxPrice: (state, action: PayloadAction<number>) => {
      state.maxPrice = action.payload;
    },
    setPriceRange: (
      state,
      action: PayloadAction<{ minPrice: number; maxPrice: number }>,
    ) => {
      state.minPrice = action.payload.minPrice;
      state.maxPrice = action.payload.maxPrice;
    },
  },
});

export const { setMinPrice, setMaxPrice, setPriceRange } = filterSlice.actions;

export default filterSlice.reducer;
