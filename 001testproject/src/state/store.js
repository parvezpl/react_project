import { configureStore } from '@reduxjs/toolkit';
import cardReducer from "./cardSlide.js"
const store = configureStore({
    reducer:cardReducer,
})

export default store