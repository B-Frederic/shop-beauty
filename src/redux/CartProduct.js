import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productData: [],
};

export const CartProduct = createSlice({
  name: "shop",
  initialState,
  reducers: {
    addToCart: (state, action) => {
       const item = state.productData.find(
        (item) => item.id === action.payload.id
       )

       if(item){
        item.quantity += action.payload.quantity
       } else {
        state.productData.push(action.payload)
       }
    },
    deleteItem: (state, action) => {
        state.productData = state.productData.filter(
          (item) => item.id !== action.payload
        );
    },
    increamentQuantity: (state, action) => {
        const item = state.productData.find(
          (item) => item.id === action.payload.id
        );
        if (item) {
          item.quantity++;
        }
      },
      decrementQuantity: (state, action) => {
        const item = state.productData.find(
          (item) => item.id === action.payload.id
        );
        if (item.quantity === 1) {
          item.quantity = 1;
        } else {
          item.quantity--;
        }
      },
  },
});

export const {
  addToCart,
  deleteItem,
  increamentQuantity,
  decrementQuantity,
} = CartProduct.actions;
export default CartProduct.reducer;
