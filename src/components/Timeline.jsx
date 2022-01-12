import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { useSelector, useDispatch } from "react-redux";
import { editMeasurement } from "../store/measurementSlice";

export default function OppositeContentTimeline() {
  const dispatch = useDispatch();
  const { measurements } = useSelector((state) => state.app.measurements);

  return (
    <React.Fragment>
      <Timeline position="alternate">
        {measurements.map(function (measurement) {
          return (
            <TimelineItem key={measurement.id}>
              <TimelineOppositeContent style={{ fontSize: 12 }}>
                {new Date(measurement.created_at).toLocaleString()}
              </TimelineOppositeContent>
              <TimelineSeparator style={{ height: 100 }}>
                <TimelineDot>
                  <Tooltip title="Edit">
                    <IconButton
                      size="small"
                      onClick={() => dispatch(editMeasurement(measurement))}
                    >
                      <EditIcon fontSize="inherit" />
                    </IconButton>
                  </Tooltip>
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>{measurement.weight} KG</TimelineContent>
            </TimelineItem>
          );
        })}
      </Timeline>
    </React.Fragment>
  );
}
