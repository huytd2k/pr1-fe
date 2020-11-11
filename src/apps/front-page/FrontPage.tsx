import {
  Box,
  createStyles,
  makeStyles,
  Theme,
  Typography,
} from "@material-ui/core";
import React from "react";
import { Redirect } from "react-router";
import { useMeQuery } from "../../graphql/graphql";
import LoginForm from "../components/LoginForm";
import AppLayout from "../layout/AppLayout";
export interface FrontPageProps {}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      textAlign: "center",
      padding: "30px",
    },

    loginBox: {
      textAlign: "center",
      padding: "20px 200px",
    },
  })
);

function FrontPage({}: FrontPageProps) {
  const {data, loading} = useMeQuery();
  const classes = useStyles();
  if (data) return <Redirect to="/dashboard" ></Redirect>
  if (loading) return <p>Loading...</p> 
  return (
    <AppLayout>
      <Typography variant="h2"> Welcome to HUSTshare</Typography>
      <Box className={classes.loginBox}>
        <LoginForm />
      </Box>
    </AppLayout>
  );
}

export default FrontPage;
