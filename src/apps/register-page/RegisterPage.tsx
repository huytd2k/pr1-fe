import classes from '*.module.css';
import { makeStyles, Theme, createStyles, Box, Container, Typography } from '@material-ui/core';
import React from 'react';
import LoginForm from '../components/LoginForm';
import NavBar from '../components/NavBar';
import RegisterForm from '../components/RegisterForm';

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

function RegisterPage({ }: RegisterPageProps) {
    const classes = useStyles();
  return (
    <div>
      <NavBar />
      <Container className={classes.container} maxWidth="md">
        <Typography variant="h2"> Create your account <br /> at HUSTshare</Typography>
        <Box className={classes.loginBox}>
          <RegisterForm />
        </Box>
      </Container>
    </div>);
};

export default RegisterPage;
