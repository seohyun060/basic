import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

interface AccessAuth {
  activated: boolean;
  onClick?: () => void;
  onAuth?: () => void;
}

const initialAccessAuthState: { [key: string]: AccessAuth } = {
  login: { activated: false },
  doctor: { activated: false },
};

const AccessAuthSlice = createSlice({
  name: 'AccessAuthSlicer',
  initialState: initialAccessAuthState,
  reducers: {
    setLoginAccessAuthCheck: (state, action: PayloadAction<Omit<AccessAuth, 'activated'>>) => {
      state.login = {
        ...state.login,
        ...action.payload,
        activated: true,
      };
    },
    setDoctorAccessAuthCheck: (state, action: PayloadAction<Omit<AccessAuth, 'activated'>>) => {
      state.doctor = {
        ...state.doctor,
        ...action.payload,
        activated: true,
      };
    },
    clearLoginAccessAuth: (state) => {
      state.login = initialAccessAuthState.login;
    },
    clearDoctorAccessAuth: (state) => {
      state.login = initialAccessAuthState.login;
    },
    clearAccessAuth: () => {
      return initialAccessAuthState;
    },
  },
});

export const {
  setLoginAccessAuthCheck,
  setDoctorAccessAuthCheck,
  clearLoginAccessAuth,
  clearDoctorAccessAuth,
  clearAccessAuth,
} = AccessAuthSlice.actions;

const AccessAuthReducer = AccessAuthSlice.reducer;

export default AccessAuthReducer;
