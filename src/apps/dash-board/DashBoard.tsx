import {
  AppBar,

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
import UploadPanel from "../components/UploadPanel";


export interface DashBoardProps { }
const drawerWidth = 240;
// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     root: {
//       marginLeft: drawerWidth,
//     },
//     appBar: {
//       width: `calc(100% - ${drawerWidth}px)`,
//       marginLeft: drawerWidth,
//     },
//     drawer: {
//       width: drawerWidth,
//       flexShrink: 0,
//       paddingRight: drawerWidth,
//     },
//     drawerPaper: {
//       width: drawerWidth,
//     },
//     // necessary for content to be below app bar
//     toolbar: theme.mixins.toolbar,
//     content: {
//       flexGrow: 1,
//       backgroundColor: theme.palette.background.default,
//       padding: theme.spacing(3),
//     },
//   })
// );

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
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
}));
// eslint-disable-next-line no-empty-pattern
function DashBoard({ }: DashBoardProps) {
  const { data } = useMeQuery();
  let { path, url } = useRouteMatch();
  const history = useHistory();
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const handleGoToUpload = useCallback( ( ) => {
    history.push(`${path}/upload`);
  },[history, path])
  const handleGoToFiles = useCallback( ( ) => {
    history.push(`${path}/files`);
  },[history, path])
  if (!data) return <Redirect to="/" />
  // return (
  //   <div className={classes.root}>
  //     <NavBar />
  //       <Drawer
  //         className={classes.drawer}
  //         variant="permanent"
  //         classes={{
  //           paper: classes.drawerPaper,
  //         }}
  //         anchor="left"
  //       >
  //         <div className={classes.toolbar} />
  //         <List>
  //             <Link style={{textDecoration: 'none'}} to={`${path}/upload`}>
  //               <ListItem button key={`upload`}>
  //                 <ListItemText primary="Upload" />
  //               </ListItem>
  //             </Link>
  //             <Link style={{textDecoration: 'none'}} to={`${path}/files`}>
  //               <ListItem button key="files">
  //                 <ListItemText primary="Your Files" />
  //               </ListItem>
  //             </Link>
  //             {/* <Link to={`${path}/upload`}>
  //               <ListItem button key={text}>
  //                 <ListItemText primary={text} />
  //               </ListItem>
  //             </Link> */}
  //         </List>
  //       </Drawer>
  //     <Switch>
  //       <Route path={`${path}/upload`}>
  //         <UploadPanel />
  //       </Route>
  //       <Route path={`${path}/files`}>
  //         <FilesPanel />
  //       </Route>
  //     </Switch>
  //   </div>
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
        <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
          Dashboard
      </Typography>
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
          </ListItemIcon>
          <ListItemText primary="Uploads" />
        </ListItem>
        <ListItem button onClick={handleGoToFiles}>
          <ListItemIcon>
          </ListItemIcon>
          <ListItemText primary="Files" />
        </ListItem>
      </List>
      <Divider />
    </Drawer>
    <main className={classes.content}>
      <div className={classes.appBarSpacer} />
      <Container maxWidth="lg" className={classes.container}>
         <Route path={`${path}/upload`}>
           <UploadPanel />
         </Route>
      </Container>
    </main>
  </div>

}

export default DashBoard;
