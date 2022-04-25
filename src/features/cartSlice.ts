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
  shipping: number;
  isCheckedOut: boolean;
}

const cartInitial: CartState = {
  products: [],
  totalQuantity: 0,
  totalCost: 0,
  shipping: 0,
  isCheckedOut: false
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: cartInitial,
  reducers: {
    addProduct: (state, action: PayloadAction<CartItem>) => {
      const newItem = action.payload;
      const priceCharge = newItem.price * newItem.quantity;
      const doesProductExist = state.products.find((product) => product.id === newItem.id);
      state.totalCost += priceCharge;
      state.totalQuantity += newItem.quantity;
      if (!doesProductExist) {
        state.products.push({
          ...newItem,
          price: priceCharge
        });
      } else {
        doesProductExist.quantity += newItem.quantity;
        doesProductExist.price += priceCharge;
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
        const singleProductPrice = productToRemove.price / productToRemove.quantity;
        productToRemove.quantity -= 1;
        productToRemove.price = productToRemove.quantity * singleProductPrice;
      }
    },
    setCheckout: (state, action: PayloadAction<boolean>) => {
      state.isCheckedOut = action.payload;
    },
    setShipping: (state, action: PayloadAction<number>) => {
      state.shipping = action.payload;
    },
    resetCart: () => cartInitial
  }
});

export const { addProduct, removeProduct, setCheckout, setShipping, resetCart } = cartSlice.actions;

export default cartSlice.reducer;
