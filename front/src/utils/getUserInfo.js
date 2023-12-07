import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
export const getUserInfo = createAsyncThunk('userdata', async () => {
  try {
    const response = await axios.get('/getinfo');
    return response.data.user;
  } catch (error) {
    console.error(error);
  }
});

export default getUserInfo;
