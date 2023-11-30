import { createSlice } from '@reduxjs/toolkit';
import getUserInfo from '../utils/getUserInfo';

export const user = createSlice({
  name: 'user',
  initialState: {},
  extraReducers: (builder) => {
    builder.addCase(getUserInfo.pending, (state, action) => {
      state.status = 'Loading';
    });
    builder.addCase(getUserInfo.fulfilled, (state, action) => {
      state.name = action.payload.name;
      state.address = action.payload.address;
      state.tel = action.payload.tel;
      state.email = action.payload.email;
      state.id = action.payload.id;
      state.pw = action.payload.pw;
      state.status = 'complete';
    });
    builder.addCase(getUserInfo.rejected, (state, action) => {
      state.status = 'fail';
    });
  },
});
