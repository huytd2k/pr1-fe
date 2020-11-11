import {
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Grid,
  Link,
  makeStyles,
} from "@material-ui/core";
import Alert from "@material-ui/lab/Alert/Alert";
import { useFormik } from "formik";
import Cookies from "js-cookie";
import React from "react";
import { Form } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import { useLoginMutation } from "../../../graphql/graphql";

export interface LoginFormProps {}

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
  username: string,
  password: string,
}

const initialValues = {
  username: "",
  password: "",
}


function LoginForm({}: LoginFormProps) {

  const [loginMutation, {loading, error, data}] = useLoginMutation();

  const onSubmit = (values : FormValues) => {
    loginMutation({
      variables: {
        user: values
      }
    });
  }

  const formik = useFormik<FormValues>(
    {
      initialValues:  initialValues,
      onSubmit: onSubmit
    }
  )
  const classes = useStyles();

    error && console.log(error);

  if(data) {
  Cookies.set('token', data.login);
  return <Redirect to="/dashboard" />
  }
  
  return (
    <form onSubmit={formik.handleSubmit}className={classes.form} noValidate>
      {error && <Alert severity="error"> {error.message}</Alert>}
      <TextField
        error = {!!error} 
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="email"
        value = {formik.values.username}
        onChange = {formik.handleChange}
        label="Username"
        name="username"
        autoComplete="email"
        autoFocus
      />
      <TextField
        error = {!!error} 
        value = {formik.values.password}
        onChange = {formik.handleChange}
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
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
      >
        Sign In
      </Button>
      <Grid container>
        <Grid item xs>
        </Grid>
        <Grid item>
          <Link href="/register" variant="body2">
            {"Don't have an account? Sign Up"}
          </Link>
        </Grid>
      </Grid>
    </form>
  );
}

export default LoginForm;
