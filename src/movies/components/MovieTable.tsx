import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import { Column } from "@devexpress/dx-react-grid";
import {
  Grid,
  Table,
  TableHeaderRow
} from "@devexpress/dx-react-grid-material-ui";

/*
  @todo: Create releaseDate type
*/
interface GridRow {
  title: string;
  releaseDate: string;
  summary: string;
  id: number;
}

const rows: GridRow[] = [
  {
    id: 1,
    title: "Test",
    releaseDate: Date.now().toString(),
    summary: "Lorem Ipsum Dolor"
  },
  {
    id: 2,
    title: "Test2",
    releaseDate: Date.now().toString(),
    summary: "Lorem Ipsum Dolor"
  },
  {
    id: 3,
    title: "Test3",
    releaseDate: Date.now().toString(),
    summary: "Lorem Ipsum Dolor"
  },
  {
    id: 4,
    title: "Test4",
    releaseDate: Date.now().toString(),
    summary: "Lorem Ipsum Dolor"
  }
];

const columns: Column[] = [
  {
    name: "title",
    title: "Title"
  },
  {
    name: "releaseDate",
    title: "Release Date"
  },
  { name: "summary", title: "Summary" }
];

export default class MovieTable extends Component<{}, {}> {
  render() {
    return (
      <Paper>
        <Grid rows={rows} columns={columns}>
          <Table />
          <TableHeaderRow />
        </Grid>
      </Paper>
    );
  }
}
