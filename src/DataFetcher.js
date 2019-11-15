import React from 'react';

class DataFetcher extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      levelsData: []
    };
  }

  componentDidMount() {
    fetch('https://api.example.com/items')
      .then(result => result.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            levelsData: result
          });

          // Callback on property method
          this.props.onLoaded(result.levelsData);
        },
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }

  render() {
    const { error, isLoaded, levelsData: items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading puzzles...</div>;
    } else {
      return (
        // TODO. Remove this??
        <ul>
          {items.map(item => (
            <li key={item.name}>
              {item.name} {item.price}
            </li>
          ))}
        </ul>
      );
    }
  }
}

export default DataFetcher;
