import { configureStore } from '@reduxjs/toolkit';

import { cartItem } from './cartItem';
import { user } from './user';

export let { increase, decrease, inCart, outCart } = cartItem.actions;
export let { userInfo } = user.actions;

export default configureStore({
  reducer: {
    cartItem: cartItem.reducer,
    user: user.reducer,
  },
});
