import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CartItem {
  name: string;
  price: number;
  id: number;
  quantity: number;
}

export interface CartState {
  products: CartItem[];
  totalQuantity: number;
  totalCost: number;
  isCheckedOut: boolean;
}

const cartInitial: CartState = {
  products: [],
  totalQuantity: 0,
  totalCost: 0,
  isCheckedOut: false
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: cartInitial,
  reducers: {
    addProduct: (state, action: PayloadAction<CartItem>) => {
      const newItem = action.payload;
      const doesProductExist = state.products.find((product) => product.id === newItem.id);
      state.totalCost += newItem.price;
      state.totalQuantity += 1;
      if (!doesProductExist) {
        state.products.push({
          ...newItem,
          price: newItem.price,
          quantity: 1
        });
      } else {
        doesProductExist.quantity += 1;
        doesProductExist.price += newItem.price;
      }
    },
    removeProduct: (state, action: PayloadAction<number>) => {
      const productId = action.payload;
      const productToRemove = state.products.find((product) => product.id === productId);
      if (!productToRemove) return;
      state.totalQuantity -= 1;
      state.totalCost -= productToRemove.price;
      if (productToRemove.quantity === 1) {
        state.products = state.products.filter((item) => item.id !== productId);
      } else {
        productToRemove.quantity -= 1;
        productToRemove.price *= productToRemove.quantity;
      }
    },
    setCheckout: (state, action: PayloadAction<boolean>) => {
      state.isCheckedOut = action.payload;
    },
    resetCart: () => cartInitial
  }
});

export const { addProduct, removeProduct, setCheckout, resetCart } = cartSlice.actions;

export default cartSlice.reducer;