import {
  Button,
  Grid,
  Link,
  makeStyles,
  Snackbar,
  TextField
} from "@material-ui/core";
import Alert from "@material-ui/lab/Alert/Alert";
import { useFormik } from "formik";
import React, { useState } from "react";
import { useRegisterMutation } from "../../../graphql/graphql";
import Cookies from 'js-cookie'
import { Redirect } from "react-router";

export interface RegisterFormProps {}


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

interface FormValues {
  username: string;
  password: string;
}

const initialValues: FormValues = {
  username: "",
  password: "",
};

function RegisterForm({}: RegisterFormProps) {
  const [registerMutation, { loading, data, error }] = useRegisterMutation();

  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    setOpen(false);
  };
  const [open, setOpen] = useState(false);

  const classes = useStyles();

  const handleSubmit = (values: FormValues) => {
    registerMutation({
      variables: {
        user: values,
      },
    });
  };

  const formik = useFormik<FormValues>({
    initialValues: initialValues,
    onSubmit: handleSubmit,
  });
  
  if(data) {
  Cookies.set('token', data.register);
  return <Redirect to="/dashboard" />
  }

  return (
    <form onSubmit={formik.handleSubmit} className={classes.form}>
      <Snackbar open={!!error} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error">
        </Alert>
      </Snackbar>
      <TextField
        error={!!error}
        value={formik.values.username}
        onChange={formik.handleChange}
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="username"
        label="Username"
        name="username"
        autoComplete="email"
        autoFocus
      />
      <TextField
        onChange={formik.handleChange}
        value={formik.values.password}
        variant="outlined"
        margin="normal"
        required
        fullWidth
        name="password"
        label="Password"
        type="password"
        id="password"
        autoComplete="current-password"
      />
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        name="retype-password"
        label="Password"
        type="password"
        id="password"
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
        // onClick={(e) => e.preventDefault()}
      >
        Sign Up
      </Button>
      <Grid container>
        <Grid item xs></Grid>
        <Grid item>
          <Link href="/" variant="body2">
            {"Already had an account? Sign In"}
          </Link>
        </Grid>
      </Grid>
    </form>
  );
}

export default RegisterForm;
