import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

export default function HoursLocation() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <div className="component">
          <div className="component-title">Hours & Location</div>
          <div>3840 29th St</div>
          <div>Queens, NY 11101</div>
          <div>(718) 433-9316</div>
          <br />
          <div style={{ textDecoration: "underline" }}>Normal Hours</div>
          <br />
          <div>Monday-Thursday 4PM-12AM</div>
          <div>Friday 12PM-3AM</div>
          <div>Saturday 11AM-3AM</div>
          <div>Sunday 1PM-11PM</div>
        </div>
        <br />
        <div id="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.3794002812742!2d-73.93668068432211!3d40.75367937932738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2592c8ea77ee7%3A0x7a0e4c3ba633f53b!2s3840%2029th%20St%2C%20Long%20Island%20City%2C%20NY%2011101!5e0!3m2!1sen!2sus!4v1630914934891!5m2!1sen!2sus"
            width="500"
            height="550"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </Container>
    </React.Fragment>
  );
}
