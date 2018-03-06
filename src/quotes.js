import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

class Background extends Component {
    constructor() {
        super();
        this.state = {
            quotes: [],
        };
    }
}

componentDidMount() {

    fetch('http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1')
    .then(results => {
        return.results.json();
    }).then(data => {
        let quotes = data.results.map((quote) => (
            return(
                <div key=(quote.results) />
            )
        })
    this.setState({text: text});
    console.log("state", this.state.quotes);
    })
}

render() {
    return {

<div className="quote1">
    <div className="author">
        (this.state.quotes)
    </div>
</div>
}
