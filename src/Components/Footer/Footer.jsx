import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import CategoryIcon from "@material-ui/icons/Category";
import StarsIcon from "@material-ui/icons/Stars";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import HomeIcon from "@material-ui/icons/Home";
import { useHistory } from "react-router-dom";
import "./style.css";
const useStyles = makeStyles({
  root: {
    width: "100%",
    position: "fixed",
    bottom: 0,
    backgroundColor: "#2d313a",
    zIndex: 100,
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const history = useHistory();

  useEffect(() => {
    if (value === 0) {
      history.push("/");
    } else if (value === 1) {
      history.push("/category");
    } else if (value === 2) {
      history.push("/toprated");
    } else {
      history.push("/myaccount");
    }
  }, [value, history]);

  return (
    <div className="footer">
      <BottomNavigation
        style={{ backgroundColor: "rgba(196, 196, 196, 0.4)" }}
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction
          style={{ color: "black" }}
          label="Home"
          icon={<HomeIcon />}
        />
        <BottomNavigationAction
          style={{ color: "black" }}
          label="Category"
          icon={<CategoryIcon />}
        />
        <BottomNavigationAction
          style={{ color: "black" }}
          label="Top rated"
          icon={<StarsIcon />}
        />
        <BottomNavigationAction
          style={{ color: "black" }}
          label="My acount"
          icon={<AccountBoxIcon />}
        />
      </BottomNavigation>
    </div>
  );
}
