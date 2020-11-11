import {
  Box,
  createStyles,
  makeStyles,
  Theme,
  Typography,
} from "@material-ui/core";
import React from "react";
import RegisterForm from "../components/RegisterForm";
import AppLayout from "../layout/AppLayout";

export interface RegisterPageProps {}

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

function RegisterPage({}: RegisterPageProps) {
  const classes = useStyles();
  return (
    <AppLayout>
      <Typography variant="h2">
        {" "}
        Create your account <br /> at HUSTshare
      </Typography>
      <Box className={classes.loginBox}>
        <RegisterForm />
      </Box>
    </AppLayout>
  );
}

export default RegisterPage;
