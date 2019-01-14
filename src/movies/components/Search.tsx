import React from "react";
import {
  InputBase,
  createStyles,
  withStyles,
  WithStyles,
  Theme
} from "@material-ui/core";
import { debounce } from "lodash";

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
  handleSearch: (currentText: string, query: string) => void;
  query: string;
}

class Search extends React.Component<any | Props, {}> {
  constructor(props: any) {
    super(props);
    this.localHandleSearch = debounce(this.localHandleSearch, 500);
  }
  localHandleSearch(value: string, query: string) {
    return this.props.handleSearch(value, query);
  }
  render() {
    const { classes, query } = this.props;

    return (
      <InputBase
        placeholder='Search…'
        classes={{ root: classes.inputRoot, input: classes.inputInput }}
        onChange={(e) => this.localHandleSearch(e.target.value, query)}
      />
    );
  }
}

export default withStyles(styles)(Search);
