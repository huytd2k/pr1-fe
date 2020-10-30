import {
  Box,
  Container,
  createStyles,
  Divider,
  makeStyles,
  Theme,
  Typography,
} from "@material-ui/core";
import React from "react";
import LoginForm from "../components/LoginForm";
import NavBar from "../components/NavBar";
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
  const classes = useStyles();
  return (
    <div>
      <NavBar />
      <Container className={classes.container} maxWidth="md">
        <Typography variant="h2"> Welcome to HUSTshare</Typography>
        <Box className={classes.loginBox}>
          <LoginForm />
        </Box>
      </Container>
    </div>
  );
}

export default FrontPage;
