import React, { Component } from 'react';

class Tweet extends Component {

    render() {
        return (
            <li>
                {this.props.content}
            </li>
        );
    }
}

export default Tweet;
