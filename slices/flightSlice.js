import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  origin: null,
  destination: null,
  fromDate: null,
  toDate: null,
}

export const flightSlice = createSlice({
  name: 'flight',
  initialState,
  reducers: {
    setOrigin: (state, action) => {
        state.origin = action.payload
    },
    setDestination: (state, action) => {
        state.destination = action.payload
    },
    setFromDate: (state, action) => {
        state.fromDate = action.payload
    },
    setToDate: (state, action) => {
        state.toDate = action.payload
    },
    
  },
})

// Action creators are generated for each case reducer function
export const { setOrigin, setDestination, setFromDate, setToDate } = flightSlice.actions

export default flightSlice.reducer

export const selectOrigin = (state) => state.flight.origin;
export const selectDestination = (state) => state.flight.destination;
export const selectFromDate = (state) => state.flight.fromDate;
export const selectToDate = (state) => state.flight.toDate;
