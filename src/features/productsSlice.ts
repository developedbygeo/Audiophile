import { createSlice } from '@reduxjs/toolkit';

import data from 'data.json';

import { AllProductsType } from 'shared/models/product.model';

const productSlice = createSlice({
  name: 'products',
  initialState: data as AllProductsType,
  reducers: {}
});

export default productSlice.reducer;
