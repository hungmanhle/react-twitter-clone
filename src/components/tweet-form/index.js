import React, { Component } from 'react';

class TweetForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            value: ''
        }
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleChangeUsername(event) {
        this.setState({ username: event.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.addTweet(
            {
                username: this.state.username,
                content: this.state.value,
                date: new Date().toLocaleString()
            }
        );
        this.setState({ value: '' });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                <label>Username:
                    <input type="text" value={this.state.username} onChange={this.handleChangeUsername.bind(this)} />
                </label>
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
