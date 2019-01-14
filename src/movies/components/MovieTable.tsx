import React from "react";
import ReactTable from "react-table";
import MoviePaginationButton from "./MoviePaginationButton";
import { Movie, PaginationState, QueryState } from "./../types";
import { sortBy } from "lodash";

interface Props {
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
  getNewPage: (query: string, page: number) => void;
}

class MovieTable extends React.Component<Props, {}> {
  constructor(props: any) {
    super(props);
    this.paginationClick = this.paginationClick.bind(this);
  }

  paginationClick(page: number) {
    this.props.getNewPage(this.props.query, page);
  }
  render() {
    return (
      <ReactTable
        data={this.props.movieArray}
        resolveData={(data) => {
          return sortBy(data, "title");
        }}
        style={{ tr: { minHeight: "200px" } }}
        page={this.props.page - 1}
        className='-striped -highlight'
        onPageChange={(page) => {
          this.setState({ page });
        }}
        loading={this.props.isLoading}
        sortable={false}
        manual={true}
        pages={this.props.paginationInfo.maxPage}
        noDataText={"No Movies Found."}
        columns={[
          {
            Header: "Title",
            accessor: "title",
            style: { alignSelf: "center" }
          },
          {
            Header: "Release Date",
            accessor: "release_date",
            style: { alignSelf: "center" }
          },
          {
            accessor: "overview",
            Header: "Summary",
            style: { alignSelf: "center", whiteSpace: "unset" }
          }
        ]}
        showPageSizeOptions={false}
        defaultSorted={[{ id: "title", asc: true }]}
        NextComponent={() => (
          <MoviePaginationButton
            clickHandler={this.paginationClick}
            buttonText={"Next"}
            canNext={this.props.paginationInfo.canNext}
            currentPage={this.props.page}
          />
        )}
        PreviousComponent={() => (
          <MoviePaginationButton
            clickHandler={this.paginationClick}
            canPrevious={this.props.paginationInfo.canPrevious}
            buttonText={"Previous"}
            currentPage={this.props.page}
          />
        )}
      />
    );
  }
}

export default MovieTable;
