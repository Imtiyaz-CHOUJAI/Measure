import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Slider from "@mui/material/Slider";
import PropTypes from "prop-types";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateTimePicker from "@mui/lab/DateTimePicker";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import SaveIcon from "@mui/icons-material/Save";
import { useDispatch, useSelector } from "react-redux";
import { setShowModal, editMeasurement } from "../store/measurementSlice";

function MeasurementModal({ open }) {
  const dispatch = useDispatch();
  const measurement = useSelector((state) => state.app.measurement);

  const { min, max } = weightLimits;
  const weight = measurement ? measurement.weight : min;
  const date = measurement ? new Date(measurement.created_at) : new Date();

  const handleChange = (newValue) => {
    dispatch(editMeasurement({ ...measurement, created_at: newValue }));
  };

  const setWeight = (weight) => {
    dispatch(editMeasurement({ ...measurement, weight }));
  };

  const handleSliderChange = (event, weight) => {
    setWeight(weight);
  };

  const handleInputChange = (event) => {
    setWeight(event.target.value === "" ? "" : Number(event.target.value));
  };

  const handleBlur = () => {
    if (weight < min) {
      setWeight(min);
    } else if (weight > max) {
      setWeight(max);
    }
  };

  return (
    <Modal
      open={open}
      onClose={() => dispatch(setShowModal(false))}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style.box}>
        <Typography id="input-slider" color="text.primary" gutterBottom>
          Weight
        </Typography>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs>
            <Slider
              value={typeof weight === "number" ? weight : min}
              min={min}
              max={max}
              onChange={handleSliderChange}
              aria-labelledby="input-slider"
            />
          </Grid>
          <Grid item>
            <OutlinedInput
              id="outlined-adornment-weight"
              value={weight}
              onChange={handleInputChange}
              inputProps={{
                step: 5,
                min,
                max,
                type: "number",
                "aria-label": "weight",
              }}
              onBlur={handleBlur}
              endAdornment={<InputAdornment position="end">kg</InputAdornment>}
              aria-describedby="outlined-weight-helper-text"
            />
          </Grid>
        </Grid>
        <Typography id="input-slider" color="text.primary" gutterBottom>
          Timestamp
        </Typography>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <Stack spacing={3}>
                <DateTimePicker
                  value={date}
                  onChange={handleChange}
                  renderInput={(params) => <TextField {...params} />}
                />
              </Stack>
            </LocalizationProvider>
          </Grid>
        </Grid>
        <Button sx={{ mt: 2 }} variant="contained" endIcon={<SaveIcon />}>
          Save
        </Button>
      </Box>
    </Modal>
  );
}

const weightLimits = {
  min: 30,
  max: 150,
};

const style = {
  box: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  },
};

MeasurementModal.propTypes = {
  open: PropTypes.bool.isRequired,
};

export default MeasurementModal;
