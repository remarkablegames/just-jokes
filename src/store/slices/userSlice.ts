import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { User } from 'src/types';

export const initialState: User = {
  hasVoted: false,
  isHost: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,

  reducers: {
    resetUser: () => initialState,

    setUser(state, action: PayloadAction<Partial<User>>) {
      const user = action.payload;
      Object.assign(state, user);
    },
  },
});
