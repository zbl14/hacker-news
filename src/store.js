import { configureStore } from "@reduxjs/toolkit";
import storyListReducer from "./reducers/storyListReducer";

const store = configureStore({ reducer: storyListReducer });

export default store;
