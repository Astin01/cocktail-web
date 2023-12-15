import { configureStore } from '@reduxjs/toolkit';

import { cartItem } from './cartItem';
import { user } from './user';
import { cocktail } from './cocktail';

export let { increase, decrease, inCart, outCart } = cartItem.actions;
export let { userInfo } = user.actions;

export default configureStore({
  reducer: {
    cartItem: cartItem.reducer,
    user: user.reducer,
    cocktail: cocktail.reducer,
  },
});
