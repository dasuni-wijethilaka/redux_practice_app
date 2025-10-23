import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    users: [],
    loading: false,
    error: null
  },
  reducers: {
    // Action to trigger saga
    fetchUsersRequest: (state, action) => {
      state.loading = true;
      state.error = null;
    },
    // Action to receive success response from saga
    fetchUsersSuccess: (state, action) => {
      state.loading = false;
      state.users = action.payload;
    },
    // Action to receive error response from saga
    fetchUsersFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    }
  }
});

export const { fetchUsersRequest, fetchUsersSuccess, fetchUsersFailure } = userSlice.actions;
export default userSlice.reducer;