import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userName: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updataeName(state, action) {
      state.userName = action.payload;
    },
  },
});

export const { updataeName } = userSlice.actions;
export default userSlice.reducer;
