import React, { ReactChild } from "react";
import Header from "./Header";
import {
  CssBaseline,
  withStyles,
  createStyles,
  Theme,
  WithStyles
} from "@material-ui/core";

const styles = (theme: Theme) =>
  createStyles({
    "@global": {
      body: {
        backgroundColor: theme.palette.common.white
      }
    },
    layout: {
      flexGrow: 1
    }
  });

interface PageProps extends WithStyles<typeof styles> {
  classes: {
    "@global": string;
    layout: string;
  };
  children: ReactChild;
}

const Page = (props: PageProps) => {
  const { classes } = props;
  return (
    <React.Fragment>
      <CssBaseline />
      <Header />
      <main className={classes.layout}>{props.children}</main>
    </React.Fragment>
  );
};

export default withStyles(styles)(Page);
