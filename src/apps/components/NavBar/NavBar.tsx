import React from "react";
import {
  AppBar,
  Button,
  createStyles,
  IconButton,
  makeStyles,
  Menu,
  MenuItem,
  Theme,
  Toolbar,
  Typography,
} from "@material-ui/core";
import logo from "./wt6e-logobk-bottom.png"
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

export interface NavBarProps {}

function NavBar({}: NavBarProps) {

  const classes = useStyles();
  const [authed, setAuthed] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  return (
    <AppBar position="static">
      <Toolbar>
        <img className = { classes.logo }height = {30} width = "auto"  src={logo}></img>
        <Typography variant="h6" className={classes.title}>
          HUSTshare
        </Typography>
        {/* {
          authed ? <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>
            </div> : null
        } */}
        {/* <Button href="/register" color="inherit">Register</Button> */}
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
