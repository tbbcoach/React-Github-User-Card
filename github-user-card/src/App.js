import React from 'react';
import axios from 'axios';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: {},
      followers: []
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
  

    axios
      .get('https://api.github.com/users/tbbcoach/followers')
      .then(res => {
        console.log(res)
        this.setState({
          ...this.state,
          followers: res.data
        });
      })
      
      .catch(err => console.log('error', err))
    }
  componentDidUpdate(prevProps, prevState) {
    if (prevState !== this.state.followers) {
      console.log('Followers have changed!');
    }

  
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>GitHub User Card and Followers</h1>
          <img className='pic' width='150' height='150' src={this.state.user.avatar_url} alt = 'user pic'/>
          <h2>Username: {this.state.user.login}</h2>
          <h2>Name: {this.state.user.name}</h2>
          <p>Location: {this.state.user.location}</p>
          <p>Bio: {this.state.user.bio}</p>
       <h3 className='followers'>GitHub Followers!</h3>    
        <div className='git-followers'>
            {this.state.followers.map((follower) => (
              <p>Name: {follower.login}
              
                <img className='image' src={follower.avatar_url} alt='follower' />
              </p>
           ))}
        </div>
          
        </header>
      </div>
    );
  };
}
export default App;
