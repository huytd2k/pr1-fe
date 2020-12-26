import { Container, createStyles, makeStyles, Theme } from "@material-ui/core";
import React, { ReactNode } from "react";
import NavBar from "../../components/NavBar";

export interface AppLayoutProps {
  children: ReactNode;
}

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

function AppLayout({ children }: AppLayoutProps) {
  const classes = useStyles();
  return (
    <div style={{backgroundColor: '#FAFAFA', height: '750px'}}>
      <NavBar />
      <Container className={classes.container} maxWidth="md">
        {children || <></>}
      </Container>
    </div>
  );
}

export default AppLayout;
