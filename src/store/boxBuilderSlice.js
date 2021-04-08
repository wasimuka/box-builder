import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  boxType: [
    { name: "White Box", price: 10, id: 1 },
    { name: "Black Box", price: 12, id: 3 }
  ],
  items: [
    { name: "Garden Trowel", id: 1, image: "https://www.gardeningknowhow.com/wp-content/uploads/2017/04/arden-trowel-400x267.jpg", price: 13, category: "Garden", selected: false },
    { name: "Round Neck Flower Pot", id: 2, image: "https://diycandy.com/wp-content/uploads/2016/04/Rainbow-Ombre-Pot_11.jpg", price: 8, category: "Garden", selected: false },
    { name: "DIY Garden Fence", id: 3, image: "https://i.pinimg.com/originals/c9/21/e5/c921e5227185e49390ccb2307b9db277.jpg", price: 7, category: "Garden", selected: false }
  ],
  selectedItems: [],
  selectedBox: null,
  status: 'idle',
};

export const boxBuilderSlice = createSlice({
  name: 'boxBuilder',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    addItem: (state, action) => {
      let newItem = { ...action.payload, quantity: 1 };
      state.items.find(item => item.id === newItem.id).selected = true;
      state.selectedItems = [...state.selectedItems, newItem];
    },
    decrement: (state, action) => {
      let item = state.selectedItems.find(item => item.id === action.payload);
      let index = state.selectedItems.findIndex(item => item.id === action.payload)
      if (item.quantity === 1) {
        state.selectedItems.splice(index, 1);
        state.items.find(item => item.id === action.payload).selected = false;
      } else {
        item.quantity -= 1;
      }
    },
    increment: (state, action) => {
      let item = state.selectedItems.find(item => item.id === action.payload);
      item.quantity += 1;
    },
    selectBox: (state, action) => {
      state.selectedBox = action.payload;
    }
  },

});

export const { addItem, decrement, increment, selectBox } = boxBuilderSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectBoxBuilder = (state) => state.boxBuilder;


export default boxBuilderSlice.reducer;
