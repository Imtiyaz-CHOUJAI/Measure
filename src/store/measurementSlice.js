import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  loading: true,
  measurements: [],
  measurement: null,
  showModal: false,
};

export const measurementSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setLoading: (state, { payload }) => {
      state.loading = payload;
    },

    setShowModal: (state, { payload }) => {
      state.showModal = payload;
    },

    setMeasurements: (state, { payload }) => {
      state.measurements = payload;
    },

    pushNewMeasurement: (state, { payload }) => {
      state.measurements.push(payload);
    },

    editMeasurement: (state, { payload }) => {
      state.measurement = payload;
      state.showModal = true;
    },

    updateMeasurement: (state, { payload }) => {
      const measurements = state.measurements;
      const measurement = measurements.findIndex(
        (item) => item.id === payload.id
      );

      measurements.splice(measurement, 1, payload);
      state.measurement = null;
    },

    deleteMeasurement: (state, { payload }) => {
      const measurements = state.measurements.data;
      const measurement = measurements.findIndex((item) => item.id === payload);
      measurements.splice(measurement, 1);
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setLoading,
  setShowModal,
  setMeasurements,
  pushNewMeasurement,
  editMeasurement,
  updateMeasurement,
  deleteMeasurement,
} = measurementSlice.actions;

export default measurementSlice.reducer;
