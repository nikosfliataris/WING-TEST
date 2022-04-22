import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Patient: [],
};

const PatientSlice = createSlice({
  name: "patient",
  initialState,
  reducers: {
    patientDetails: (state, action) => {
      state.Patient = action.payload;
    },
  },
});

export const { patientDetails } = PatientSlice.actions;

export default PatientSlice.reducer;
