import {
  AppBar,
  Button,
  Container,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Toolbar,
  Typography
} from "@material-ui/core";
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import DashboardIcon from '@material-ui/icons/Dashboard';
import MenuIcon from '@material-ui/icons/Menu';
import clsx from "clsx";
import React, { useCallback } from "react";
import { Redirect, Route, useHistory, useRouteMatch } from "react-router-dom";
import { useMeQuery } from "../../graphql/graphql";
import FilesPanel from "../components/FilesPanel";
import UploadPanel from "../components/UploadPanel";
import BackupIcon from '@material-ui/icons/Backup';
import FolderIcon from '@material-ui/icons/Folder';
import Cookies from "js-cookie";
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';
import logo from './logo.png'
export interface DashBoardProps { }
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    backgroundColor: '#FAFAFA',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
    logo: {
      marginRight: "10px",
    },
}));
// eslint-disable-next-line no-empty-pattern
function DashBoard({ }: DashBoardProps) {
  const { data } = useMeQuery();
  let { path } = useRouteMatch();
  const history = useHistory();
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleLogout = useCallback( () => {
    Cookies.remove('token');
    window.location.reload();
  },[] )
  const handleGoToUpload = useCallback(() => {
    history.push(`${path}/upload`);
  }, [history, path])
  const handleGoToFiles = useCallback(() => {
    history.push(`${path}/files`);
  }, [history, path])
  if (!data) return <Redirect to="/" />
  return <div className={classes.root}>
    <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
      <Toolbar className={classes.toolbar}>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
        >
          <MenuIcon />
        </IconButton>
        <img className={classes.logo} height={30} width="auto" src={logo}></img>
        <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
          Dashboard
      </Typography>
      <Button color="inherit" onClick={handleLogout}>
        <IconButton color='inherit'>
          <ExitToAppOutlinedIcon />
        </IconButton>
        Logout
      </Button>
        <IconButton color="inherit">
        </IconButton>
      </Toolbar>
    </AppBar>
    <Drawer
      variant="permanent"
      classes={{
        paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
      }}
      open={open}
    >
      <div className={classes.toolbarIcon}>
        <IconButton onClick={handleDrawerClose}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <Divider />
      <List>
        <ListItem button>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button onClick={handleGoToUpload} >
          <ListItemIcon>
            <BackupIcon />
          </ListItemIcon>
          <ListItemText primary="Uploads" />
        </ListItem>
        <ListItem button onClick={handleGoToFiles}>
          <ListItemIcon>
            <FolderIcon />
          </ListItemIcon>
          <ListItemText primary="Files" />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button onClick={handleLogout} >
          <ListItemIcon>
            <ExitToAppOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Log out" />
        </ListItem>
      </List>
    </Drawer>
    <main className={classes.content}>
      <div className={classes.appBarSpacer} />
      <Container maxWidth="xl" className={classes.container}>
        <Route path={`${path}/upload`}>
          <UploadPanel />
        </Route>
        <Route path={`${path}/files`}>
          <FilesPanel />
        </Route>
      </Container>
    </main>
  </div>

}

export default DashBoard;
