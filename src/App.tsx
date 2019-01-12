import React, { Component } from "react";
import Page from "./UI/Page";
import Main from "./movies/components/Main";

class App extends Component {
  render() {
    return (
      <Page>
        <Main />
      </Page>
    );
  }
}

export default App;
