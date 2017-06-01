import React, { Component } from 'react';
import './index.css';

class Tweet extends Component {

    render() {
        return (
            <li>
                <span className='tweet-user'>{this.props.tweet.username}</span>
                <span className='tweet-content'>{this.props.tweet.content}</span>
                <span className='tweet-date'>{this.props.tweet.date}</span>
            </li>
        );
    }
}

export default Tweet;
