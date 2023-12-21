import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '..';

interface ILogin {
  persist: boolean;
}

const initialState: ILogin = {
  persist: false,
};
export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setPersist: (state, { payload }) => {
      state.persist = payload;
    },
  },
});

export const login = (state: RootState) => state.login;

export const { setPersist } = loginSlice.actions;
const loginReducer = loginSlice.reducer;

export default loginReducer;
