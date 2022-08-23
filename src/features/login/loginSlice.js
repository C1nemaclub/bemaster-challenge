import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  user: '',
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: '',
};

export const loginUser = createAsyncThunk(
  'user/login',
  async (userData, thunkAPI) => {
    try {
      return { userData };
    } catch (e) {
      const message = e.message;
      console.log(e.message);
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const loginSlice = createSlice({
  name: 'login',
  initialState: initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.msg = action.payload;
      });
  },
});

export const { reset } = loginSlice.actions;
export default loginSlice.reducer;
