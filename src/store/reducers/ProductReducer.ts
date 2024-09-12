import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Product {
  id: string;
  name: string;
  price: number;
  image_url: any;
  brand: string;
  description: string;
}

const initialState: Product[] = [];

const ProductSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<Product>) {
     let ifExist=state.some((product) => product.id == action.payload.id);
     console.log(ifExist,"ifExist")
    
     console.log(state,"state1")
     console.log(action,"action2")
     if(!ifExist){
      state.push(action.payload);
     }
     console.log(state,"state")
     console.log(action,"action")
    },
    removeFromCart(state, action: PayloadAction<Product>) {
      return state.filter((product) => product.id !== action.payload.id);
    },
  },
});

export const { addToCart, removeFromCart } = ProductSlice.actions;
export default ProductSlice.reducer;
