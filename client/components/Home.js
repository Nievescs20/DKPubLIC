import React from "react";
import { connect } from "react-redux";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import ImageList1 from "./ImageList1";
import FoodList from "./FoodList";

const useStyles = makeStyles((theme) => ({
  div: {
    background: "#24187B",
  },
}));

/**
 * COMPONENT
 */
export const Home = (props) => {
  const classes = useStyles();

  return (
    <div>
      <ImageList1 />
      <FoodList />
    </div>
  );
};

/**
 * CONTAINER
 */

export default Home;
