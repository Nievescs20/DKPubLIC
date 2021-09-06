import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import Navbar from "./Navbar";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
    position: "fixed",
    left: "2%",
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
    height: "100px",
  },
  content: {
    flexGrow: 1,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  logo: {
    height: "96px",
    width: "154px",
    marginLeft: "50px",
  },
  toolbar: {
    height: "100px",
    // display: "flex",
    // alignContent: "center",
    justifyContent: "center",
  },
  navbar: {
    height: "20px",
  },
}));

export default function PersistentDrawerLeft() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const menuItemList = [
    {
      label: "Home",
      clickHandler: () => {
        handleDrawerClose();
      },
      path: "/home",
      img: "/home-page.png",
    },
    {
      label: "Hours & Location",
      clickHandler: () => {
        handleDrawerClose();
      },
      path: "/hourslocation",
      img: "/clock.png",
    },
    {
      label: "Menu",
      clickHandler: () => {
        handleDrawerClose();
      },
      path: "/Menu",
      img: "/menu.png",
    },
    {
      label: "On Draft",
      clickHandler: () => {
        handleDrawerClose();
      },
      path: "/Drafts",
      img: "/beer.png",
    },
    {
      label: "Cocktails & Wine",
      clickHandler: () => {
        handleDrawerClose();
      },
      path: "/Wines",
      img: "/wine.png",
    },
    {
      label: "Events",
      clickHandler: () => {
        handleDrawerClose();
      },
      path: "/meet-the-team",
      img: "/calendar.png",
    },
    {
      label: "Parties",
      clickHandler: () => {
        dispatch(logout());
        handleDrawerClose();
      },
      path: "/",
      img: "/confetti.png",
    },
    {
      label: "Contact Us",
      clickHandler: () => {
        dispatch(logout());
        handleDrawerClose();
      },
      path: "/",
    },
  ];

  return (
    <div className={classes.root} style={{ marginTop: "em" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar className={classes.toolbar}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <img src="/BusinessCard.jpg" className={classes.logo} />
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          {menuItemList.map((menuItem, index) => (
            <div key={menuItem.label}>
              <Link to={menuItem.path}>
                <ListItem button onClick={menuItem.clickHandler}>
                  <ListItemIcon>
                    <img src={menuItem.img} />
                  </ListItemIcon>
                  <ListItemText primary={menuItem.label} />
                </ListItem>
              </Link>
            </div>
          ))}
        </List>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        <div className={classes.navbar}>
          <Navbar />
        </div>
      </main>
    </div>
  );
}
