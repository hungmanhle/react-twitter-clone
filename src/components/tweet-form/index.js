import React, { Component } from 'react';

class TweetForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: ''
        }
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.addTweet(this.state.value);
        this.setState({ value: ''});
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                <label>
                    Write your tweet: 
                    <input type="text" value={this.state.value} onChange={this.handleChange.bind(this)} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default TweetForm;
