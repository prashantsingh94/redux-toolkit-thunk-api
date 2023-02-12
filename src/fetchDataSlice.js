import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { increment } from "./CounterSlice";
import axios from "axios";
const FETCH_PRODUCT_URL =
  "https://kamanikandan.github.io/eStore/data/product.json";
const initialState = {
  isLoading: false,
  products: [],
  error: null,
};

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (postId, thunkAPI) => {
    console.log(postId, thunkAPI);
    console.log(thunkAPI.getState());
    //console.log(thunkAPI.dispatch(increment()));
    //console.log(thunkAPI.getState());
    try {
      const response = await axios.get(FETCH_PRODUCT_URL);
      //console.log(response);
      return response?.data?.products;
    } catch (err) {
      console.log(err.message);
      return thunkAPI.rejectWithValue(
        "Something went wring while fetching data! Please try again later!"
      );
      //return err.message;
    }
  }
);
const fetchDataSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        //console.log(action.payload);
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        console.log(action.error.message);
        state.isLoading = false;
        state.error = "There are some error while fetching the data!";
      });
  },
});

//const { fetchData } = fetchDataSlice.actions

export default fetchDataSlice.reducer;
