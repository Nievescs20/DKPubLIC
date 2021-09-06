import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import RestoreIcon from "@material-ui/icons/Restore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";

const useStyles = makeStyles({
  root: {
    width: "100%",
    background: "#A0874A",
  },
});

export default function Footer() {
  const classes = useStyles();
  // const [value, setValue] = React.useState(0);

  return (
    <div id="footer">
      <BottomNavigation
        // value={value}
        // onChange={(event, newValue) => {
        //   setValue(newValue);
        // }}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction
          href="https://www.facebook.com"
          label="Facebook"
          icon={<FacebookIcon />}
        />
        <BottomNavigationAction
          href="https://www.twitter.com"
          label="Twitter"
          icon={<TwitterIcon />}
        />
        <BottomNavigationAction
          href="https://www.instagram.com"
          label="Instagram"
          icon={<InstagramIcon />}
        />
      </BottomNavigation>
    </div>
  );
}
