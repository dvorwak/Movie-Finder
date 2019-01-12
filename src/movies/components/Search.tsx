import React from "react";
import {
  InputBase,
  createStyles,
  withStyles,
  WithStyles,
  Theme
} from "@material-ui/core";

const styles = (theme: Theme) =>
  createStyles({
    inputRoot: {
      color: "inherit",
      width: "100%"
    },
    inputInput: {
      paddingTop: theme.spacing.unit,
      paddingRight: theme.spacing.unit,
      paddingBottom: theme.spacing.unit,
      paddingLeft: theme.spacing.unit * 10,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: 120,
        "&:focus": {
          width: 200
        }
      }
    }
  });

interface Props extends WithStyles<typeof styles> {
  classes: {
    inputInput: string;
    inputRoot: string;
  };
}

class Search extends React.Component<Props, {}> {
  render() {
    const { classes } = this.props;
    return (
      <InputBase
        placeholder='Search…'
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput
        }}
      />
    );
  }
}

export default withStyles(styles)(Search);
