import React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { MovieActionTypes } from "./../types";
import MovieTable from "./MovieTable";

class Main extends React.Component<{ dispatch: Dispatch }, {}> {
  componentDidMount() {
    this.props.dispatch({
      type: MovieActionTypes.FETCH_MOVIES_REQUEST,
      payload: { page: 2, query: "die hard" }
    });
  }
  render() {
    return (
      <React.Fragment>
        <MovieTable />
      </React.Fragment>
    );
  }
}

export default connect(null)(Main);
