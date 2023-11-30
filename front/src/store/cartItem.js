import { createSlice } from '@reduxjs/toolkit';

export const cartItem = createSlice({
  name: 'cartItem',
  initialState: [],
  reducers: {
    increase(state, id) {
      const i = state.findIndex((element) => element.id === id.payload);
      state[i].count += 1;
    },
    decrease(state, id) {
      const i = state.findIndex((element) => element.id === id.payload);
      if (state[i].count > 1) state[i].count -= 1;
      else alert('최소 수량은 1개입니다');
    },
    inCart(state, product) {
      const i = state.findIndex((element) => element.id === product.payload.id);
      if (i !== -1) {
        state[i].count += product.payload.count;
        state[i].id = product.payload.id;
        state[i].name = product.payload.name;
        state[i].price = product.payload.price;
        state[i].tprice = product.payload.tprice;
      } else return [...state, product.payload];
    },
    outCart(state, id) {
      const i = state.findIndex((element) => element.id === id.payload);
      let copy = [...state];
      copy.splice(i, 1);
      return copy;
    },
  },
});
