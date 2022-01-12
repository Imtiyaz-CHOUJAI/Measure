import React from "react";
import Timeline from "./Timeline.jsx";
import MeasurementModal from "./MeasurementModal.jsx";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";

import { useSelector, useDispatch } from "react-redux";
import {
  setShowModal,
  setLoading,
  setMeasurements,
} from "../store/measurementSlice";
import { useQuery } from "@apollo/client";
import { GET_MEASUREMENTS } from "../queries";
import Loading from "./Loading";

function Measurements() {
  const dispatch = useDispatch();
  const { loading: loadingState, showModal } = useSelector(
    (state) => state.app
  );

  const { loading, error, data } = useQuery(GET_MEASUREMENTS);

  dispatch(setLoading(loading));
  dispatch(setMeasurements(data));

  if (loadingState) return <Loading />;
  if (error) return `Error! ${error.message}`;

  return (
    <div className="App">
      <div className="image"></div>
      <div className="container">
        <Box sx={style.button}>
          <Fab
            color="secondary"
            aria-label="add"
            onClick={() => dispatch(setShowModal(true))}
          >
            <AddIcon />
          </Fab>
        </Box>
        <Timeline />

        <MeasurementModal open={showModal} />
      </div>
    </div>
  );
}

const style = {
  button: {
    alignSelf: "flex-end",
    padding: "15px",
    position: "fixed",
  },
};

export default Measurements;
