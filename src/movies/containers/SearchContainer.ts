import { connect } from "react-redux";
import { Dispatch } from "redux";
import Search from "../components/Search";
import { GlobalState } from "../../store/rootReducer";
import { searchRequestAction } from "../actions";
import { PaginationState, QueryState, MovieActionTypes } from "../types";

interface StateFromProps {
  page: PaginationState;
  query: QueryState;
}
interface DispatchFromProps {
  handleSearch: (currentText: string, query: string) => void;
}

const mapDispatchToProps = (dispatch: Dispatch): DispatchFromProps => ({
  handleSearch: (currentText: string, query: string) => {
    if (currentText === query) {
      return;
    }
    if (currentText === "") {
      dispatch({ type: MovieActionTypes.CLEAR_MOVIE_QUERY });
      dispatch({ type: MovieActionTypes.SET_CURRENT_PAGE, payload: 1 });
    }
    dispatch(searchRequestAction(currentText));
  }
});

const mapStateToProps = (state: GlobalState) => ({
  page: state.movieReducer.page,
  query: state.movieReducer.query
});

export default connect<StateFromProps, DispatchFromProps, void, GlobalState>(
  mapStateToProps,
  mapDispatchToProps
)(Search);
