import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

class Quotes extends Component {
    constructor() {
        super();
        this.state = {
            title: [],
            content: []
        };
    }

componentDidMount() {

    fetch('http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1')
    .then(results => {
        return results.json();
    }).then(data => {
        let quotes = data.results.map((title) => {
            return(
                <div key={title.results} />
            )
        })
    this.setState({quotes: quotes});
    console.log("state", this.state.title);
    })
}

render() {
    return (

<div className="quote1">
    <div className="author">
        {this.state.title}
    </div>
</div>
    )}}
