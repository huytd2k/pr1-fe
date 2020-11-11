import {
  Box,
  createStyles,
  Drawer,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Theme,
} from "@material-ui/core";
import React from "react";
import { Link, Redirect, Route, Switch, useRouteMatch } from "react-router-dom";
import { useMeQuery } from "../../graphql/graphql";
import FilesPanel from "../components/FilesPanel";
import NavBar from "../components/NavBar";
import UploadPanel from "../components/UploadPanel";

export interface DashBoardProps {}
const drawerWidth = 240;
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
        marginLeft: drawerWidth,
    },
    appBar: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      paddingRight: drawerWidth,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing(3),
    },
  })
);

function DashBoard({}: DashBoardProps) {
  const {data} = useMeQuery();
  let { path, url } = useRouteMatch();
  const classes = useStyles();
  if (!data) return <Redirect to = "/" />
  return (
    <div className={classes.root}>
      <NavBar />
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
          anchor="left"
        >
          <div className={classes.toolbar} />
          <List>
              <Link style={{textDecoration: 'none'}} to={`${path}/upload`}>
                <ListItem button key={`upload`}>
                  <ListItemText primary="Upload" />
                </ListItem>
              </Link>
              <Link style={{textDecoration: 'none'}} to={`${path}/files`}>
                <ListItem button key="files">
                  <ListItemText primary="Your Files" />
                </ListItem>
              </Link>
              {/* <Link to={`${path}/upload`}>
                <ListItem button key={text}>
                  <ListItemText primary={text} />
                </ListItem>
              </Link> */}
          </List>
        </Drawer>
      <Switch>
        <Route path={`${path}/upload`}>
          <UploadPanel />
        </Route>
        <Route path={`${path}/files`}>
          <FilesPanel />
        </Route>
      </Switch>
    </div>
  );
}

export default DashBoard;
