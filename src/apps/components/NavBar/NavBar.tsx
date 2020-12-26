import React, { useState } from "react";
import {
  AppBar,
  Button,
  ClickAwayListener,
  createStyles,
  IconButton,
  makeStyles,
  Menu,
  MenuItem,
  Theme,
  Toolbar,
  Typography,
} from "@material-ui/core";
import logo from "./wt6e-logobk-bottom.png";
import { AccountCircle } from "@material-ui/icons";
import Cookies from "js-cookie";
import { useMeQuery } from "../../../graphql/graphql";
import { useHistory } from 'react-router-dom'
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    logo: {
      marginRight: "10px",
    },
  })
);

export interface NavBarProps {
  children?: React.ReactNode;
}

function NavBar({children}: NavBarProps) {
  let history = useHistory();
  const classes = useStyles();
  const [authed, setAuthed] = React.useState(false);
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAuthed(event.target.checked);
  };
  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setOpen(true);
    setAnchorEl(event.currentTarget);
  };
  
  const handleClickAway = () => {
    setOpen(false);
    setAnchorEl(null);
  };
  
  const handleGoToDashboard = () => {
    setOpen(false);
    setAnchorEl(null);
    history.push('/dashboard');
  };

  const handleLogout = () => {
    Cookies.remove('token');
    window.location.reload();
  }

  const { loading, data, error } = useMeQuery();

  return (
    <AppBar position="static">
      <Toolbar>
        {children}
        <img className={classes.logo} height={30} width="auto" src={logo}></img>
        <Typography variant="h6" className={classes.title}>
          HUSTshare
        </Typography>
        {data ? (
          <ClickAwayListener onClickAway={handleClickAway}>
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
                {data.me.username}
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={open}
                onClose={handleClickAway}
              >
                <MenuItem onClick={handleGoToDashboard}>Dashboard</MenuItem>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </Menu>
            </div>
          </ClickAwayListener>
        ) : (
          <Button href="/register" color="inherit">
            Register
          </Button>
        )}
        {/* <Button href="/register" color="inherit">Register</Button> */}
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
