import { configureStore } from "@reduxjs/toolkit";
import flightSlice from './slices/flightSlice'


export const store = configureStore({
    reducer: {
        flight: flightSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    }),
})