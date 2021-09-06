import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles((theme) => ({
  div: {
    background: "#24187B",
    color: "white",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    height: "30px",
  },
}));

export default function Navbar() {
  const classes = useStyles();
  return (
    <div id="navbar">
      <CssBaseline />
      <div className="navbar-div">
        <a
          style={{ color: "white" }}
          href="https://www.google.com/maps/place/3840+29th+St,+Long+Island+City,+NY+11101/@40.7536794,-73.9366807,17z/data=!3m1!4b1!4m5!3m4!1s0x89c2592c8ea77ee7:0x7a0e4c3ba633f53b!8m2!3d40.7536794!4d-73.934492"
        >
          3840 29th St, Queens, NY 11101
        </a>
        <a href="tel:7184339316" style={{ color: "white" }}>
          (718) 433-9316
        </a>
      </div>
    </div>
  );
}
