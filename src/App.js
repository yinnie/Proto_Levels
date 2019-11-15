import React, { Component } from 'react';
import AppContainer from './AppContainer';
import DataFetcher from './DataFetcher';
import localDataLoader from './LocalDataLoader';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      data: {}
    };
  }

  loadData = fetchedData => {
    this.setState({
      loading: false,
      data: fetchedData
    });
  };

  render() {
    // Set this to true if loading local test data
    const isLoadTestLocalData = true;
    if (isLoadTestLocalData) {
      return <AppContainer data={localDataLoader.getLocalData()} />;
    }

    if (this.state.loading) {
      return <DataFetcher onLoaded={this.loadData} />;
    } else {
      // When finished loading, return AppContainer.
      return <AppContainer data={this.state.data} />;
    }
  }
}

export default App;
