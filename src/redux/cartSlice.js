import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: {},
  },
  reducers: {
    addItem: (state, action) => {
      const plant = action.payload;
      if (state.items[plant.id]) {
        state.items[plant.id].quantity += 1;
      } else {
        state.items[plant.id] = { ...plant, quantity: 1 };
      }
    },
    removeItem: (state, action) => {
      delete state.items[action.payload];
    },
    increaseItem: (state, action) => {
      state.items[action.payload].quantity += 1;
    },
    decreaseItem: (state, action) => {
      if (state.items[action.payload].quantity > 1) {
        state.items[action.payload].quantity -= 1;
      }
    },
  },
});

export const { addItem, removeItem, increaseItem, decreaseItem } = cartSlice.actions;
export default cartSlice.reducer;