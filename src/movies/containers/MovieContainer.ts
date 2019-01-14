import { connect } from "react-redux";
import { Dispatch } from "redux";
import { GlobalState } from "../../store/rootReducer";
import { searchRequestAction, getNewPageAction } from "../actions";
import { PaginationState, QueryState, Movie, MovieActionTypes } from "../types";
import { getMoviesById, paginationInfo, isLoadingMovies } from "./../selectors";
import MovieTable from "../components/MovieTable";

interface StateFromProps {
  movieArray: Movie[];
  page: PaginationState;
  query: QueryState;
  isLoading: boolean;
  paginationInfo: {
    page: number;
    maxPage: number;
    totalResults: number;
    canNext: boolean;
    canPrevious: boolean;
  };
}
interface DispatchFromProps {
  handleSearch: (query: string, page: number) => void;
  getNewPage: (query: string, page: number) => void;
}

const mapDispatchToProps = (dispatch: Dispatch): DispatchFromProps => ({
  handleSearch: (query: string, page: number) => {
    dispatch(searchRequestAction(query));
    dispatch({ type: MovieActionTypes.SET_CURRENT_PAGE, payload: page });
  },
  getNewPage: (query: string, page: number) => {
    dispatch(getNewPageAction(query, page));
    dispatch({ type: MovieActionTypes.SET_CURRENT_PAGE, payload: page });
  }
});

const mapStateToProps = (state: GlobalState) => ({
  movieArray: getMoviesById(state),
  paginationInfo: paginationInfo(state),
  page: state.movieReducer.page,
  query: state.movieReducer.query,
  isLoading: isLoadingMovies(state)
});

export default connect<StateFromProps, DispatchFromProps, void, GlobalState>(
  mapStateToProps,
  mapDispatchToProps
)(MovieTable);
