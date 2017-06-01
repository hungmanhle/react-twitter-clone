import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TweetList from './components/tweet-list';
import TweetForm from './components/tweet-form';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tweets: [
        { username: 'test-user', content: 'hey this is a test tweet!', date: new Date().toLocaleString() },
        { username: 'test-user', content: 'hey this is a test tweet!', date: new Date().toLocaleString() },
        { username: 'test-user', content: 'hey this is a test tweet!', date: new Date().toLocaleString() },
      ]
    }
  }
  addTweet(value) {
    if (value !== '') {
      this.setState({ tweets: [value, ...this.state.tweets] });
    }
  }
  render() {
    return (
      <div className="App">
        <h1>React Twitter Clone</h1>
        <TweetForm addTweet={this.addTweet.bind(this)} />
        <TweetList tweets={this.state.tweets} />
      </div>
    );
  }
}

export default App;
