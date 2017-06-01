import React, { Component } from 'react';
import Tweet from '../tweet';
import './index.css';

class TweetList extends Component {
    render() {
        return (
            <div className='tweet-list-container'>
                <ul className='tweet-list'>
                    {
                        this.props.tweets.map((datum, i) => {
                            return (
                                <Tweet content={datum} key={datum + i} />
                            );
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default TweetList;
