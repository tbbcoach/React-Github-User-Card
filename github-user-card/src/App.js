import React from 'react';
import axios from 'axios';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: {}
    }
  }

  componentDidMount() {
    axios
      .get('https://api.github.com/users/tbbcoach')
      .then(res => {
        console.log(res)
        this.setState({
          ...this.state,
          user: res.data
        });
      })
  
      .catch(err => console.log('error', err));
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>GitHub User Card and Followers</h1>
          <h2>Username: {this.state.user.login}</h2>
          <h2>Name: {this.state.user.name}</h2>
          <p>
            Edit <code>src/App.js</code> and save to reload.
        </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a>
        </header>
      </div>
    );
  };
}
export default App;
