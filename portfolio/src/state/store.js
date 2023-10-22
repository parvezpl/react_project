
import { configureStore } from '@reduxjs/toolkit';
import workReducer from "./slices.js"


const store = configureStore({
    reducer: workReducer,
})

export default store